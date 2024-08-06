const { parse: parseSVG, stringify: stringifySVG } = require("svgson")
const { remove, ensureDir } = require("fs-extra")
const { transform } = require("@svgr/core")
const changeCase = require("change-case")
const path = require("path")
const fs = require("fs")

const SVGR_CONFIG = {
  plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
  jsxRuntime: "classic",
  exportType: "default",
  typescript: true,
  svgo: true,
  ref: true,
  svgoConfig: {
    js2svg: { indent: 2, pretty: true },

    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
    ],
  },
}

const ROOT_ICON_DIR = path.join(
  __dirname,
  "..",
  "adwaita-icon-theme/Adwaita/symbolic",
)

const ROOT_OUT_DIR = path.join(__dirname, "..", "src")

async function prepareSvgCode(svg) {
  const tree = await parseSVG(svg)

  const cleanSvgNode = node => {
    if (node.name === "svg") {
      Object.assign(node?.attributes, {
        viewBox: "0 0 16 16",
        height: 16,
        width: 16,
      })
    }

    if (node?.attributes?.stroke) {
      node.attributes.stroke = "currentColor"
    }

    if (node?.attributes?.fill) {
      node.attributes.fill = "currentColor"
    }

    if (node?.attributes?.style) {
      Object.assign(node.attributes, {
        style: node?.attributes?.style
          ?.replaceAll("shape-padding:0;", "")
          .replaceAll("-inkscape-stroke:none;", "")
          .replaceAll("-inkscape-stroke:none", ""),
      })
    }

    if (node?.children) {
      for (const children of node?.children || []) {
        cleanSvgNode(children)
      }
    }

    return node
  }

  cleanSvgNode(tree)

  const clean = stringifySVG(tree)
  return clean
}

function getName(filename) {
  return changeCase.pascalCase(
    filename.replace(".svg", "").replace("-symbolic", ""),
  )
}

async function pipeTransform(groups) {
  const indexes = {}

  for (const group of groups) {
    const files = fs.readdirSync(path.join(ROOT_ICON_DIR, group))
    const outDir = path.join(ROOT_OUT_DIR, group)

    if (!indexes[group]) {
      indexes[group] = ""
    }

    const names = files.reduce((map, source) => {
      const name = getName(source)
      map[name] = source
      return map
    }, {})

    for (const [name, source] of Object.entries(names)) {
      const sourcePath = path.join(ROOT_ICON_DIR, group, source)
      const outPath = path.join(outDir, `${name}.tsx`)
      const rawSvg = fs.readFileSync(sourcePath, "utf-8")
      const svg = await prepareSvgCode(rawSvg)

      let code = transform.sync(svg, SVGR_CONFIG, { componentName: name })
      fs.writeFileSync(outPath, code, "utf-8")

      indexes[group] += `export { default as ${name} } from "./${name}"\n`
    }
  }

  return indexes
}

function pipeGroupIndex(indexes) {
  let globalImports = ""

  for (const [group, imports] of Object.entries(indexes)) {
    globalImports += `export * as ${changeCase.pascalCase(group)} from "./${group}"\n`

    fs.writeFileSync(
      path.join(ROOT_OUT_DIR, group, "index.ts"),
      imports,
      "utf-8",
    )
  }

  return globalImports
}

async function main() {
  const groups = fs
    .readdirSync(ROOT_ICON_DIR)
    .filter(group => group !== "legacy")

  await remove(ROOT_OUT_DIR)
  await Promise.all(groups.map(g => ensureDir(path.join(ROOT_OUT_DIR, g))))

  const indexes = await pipeTransform(groups)
  const globalImports = pipeGroupIndex(indexes)

  await fs.writeFileSync(
    path.join(ROOT_OUT_DIR, "index.ts"),
    globalImports,
    "utf-8",
  )
}

main()