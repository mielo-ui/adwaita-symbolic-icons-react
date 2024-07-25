<p align="center">
  <img src="https://raw.githubusercontent.com/mielo-ui/mielo.css/main/logo.png" />
</p>

<h1 align="center">
  Adwaita Icons React
</h1>

<p align="center">
  Package contains generated svg icons as react library from <a href="https://gitlab.gnome.org/GNOME/adwaita-icon-theme">Adwaita Icon Theme</a>
</p>


## Quick install

### NPM

```sh
npm install adwaita-symbolic-icons-react
```

**or**

### Yarn

```sh
npm install adwaita-symbolic-icons-react
```

### Import
``` tsx
import * as Icons from "adwaita-symbolic-icons-react"

<Icons.Actions.EditCopy className="icon" />
```

## Documentation
Browse the [online documentation here.](#todo)

# Development
For build library from source:

``` sh
git clone https://github.com/mielo-ui/adwaita-symbolic-icons-react
cd adwaita-symbolic-icons-react
git submodule update --init --recursive
npm install # or "yarn"
npm run build:all
```