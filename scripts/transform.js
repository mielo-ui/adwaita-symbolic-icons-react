const { remove, ensureDir } = require("fs-extra")
const { transform } = require("@svgr/core")
const changeCase = require("change-case")
const process = require("process")
const path = require("path")
const fs = require("fs")

const SVGR_CONFIG = {
  plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
  jsxRuntime: "classic",
  exportType: "default",
  typescript: true,
  svgo: true,
  ref: true,
}

const ROOT_ICON_DIR = path.join(
  __dirname,
  "..",
  "adwaita-icon-theme/Adwaita/symbolic",
)

const ROOT_OUT_DIR = path.join(__dirname, "..", "src")

function transformCode(code) {
  const COLORS_REGEX = /(#2e3436|#2e3434)/g
  const _HEX_REGEX = /(#[0-9|a-f]{6})/g

  return code
  .replaceAll(`colorInterpolationFilters: "linearRGB",`, "")
  .replaceAll(`InkscapeFontSpecification: "&quot",`, "")
  .replaceAll(`InkscapeFontSpecification: "Sans",`, "")
  .replaceAll(/InkscapeStroke: "none",/gm, "")
  .replaceAll(/InkscapeStroke: "none"/gm, "")
  .replaceAll(`writingMode: "lr-tb",`, "")
  .replaceAll(`shapePadding: 0,`, "")
  .replaceAll(`solidColor: "#000",`, "")
  .replaceAll(COLORS_REGEX, "currentColor")
  .replaceAll(`width={16}`, "width={16} height={16}")
  .replaceAll(`height={16}`, `viewBox="0 0 16 16"`)
}

function getName(filename) {
  return changeCase.pascalCase(
    filename.replace(".svg", "").replace("-symbolic", ""),
  )
}

function pipeTransform(groups) {
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
      const svg = fs.readFileSync(sourcePath, "utf-8")

      let code = transform.sync(svg, SVGR_CONFIG, { componentName: name })
      fs.writeFileSync(outPath, transformCode(code), "utf-8")

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
  const groups = fs.readdirSync(ROOT_ICON_DIR).filter(group => group !== "legacy")

  await remove(ROOT_OUT_DIR)
  await Promise.all(groups.map(g => ensureDir(path.join(ROOT_OUT_DIR, g))))

  const indexes = pipeTransform(groups)
  const globalImports = pipeGroupIndex(indexes)

  await fs.writeFileSync(
    path.join(ROOT_OUT_DIR, "index.ts"),
    globalImports,
    "utf-8",
  )
}

main()