# NPM Command Lists

### Create package.json file
```bash
npm init
```
### Accept the default config in the package.json
```bash
npm install -y
```
### Set custom config in the package.json
```bash
npm set init-author-name "{{author_name}}"
npm set init-license "{{license}}"
```
### Delete custom config in the package.json
```bash
npm config delete init-author-name
```
### Show custom config in the package.json
```bash
npm get init-author-name
```
### Install dependencies
```bash
<!-- install bootstrap -->
npm i bootstrap

<!-- install globally -->
npm i -g bootstrap

<!-- show where global package installed -->
npm root -g

<!-- remove global package -->
npm remove -g {{module}}

<!-- show the package installed inside the current project -->
npm list

<!-- show only top level of list -->
npm list --depth 0

<!-- install dev dependencies -->
npm i bootstrap --save-dev

<!-- install specific package version -->
npm i bootstrap@4.0.1

<!-- update to the latest version -->
npm update bootstrap
```
### Remove dependencies
```bash
npm uninstall bootstrap
npm rm bootstrap
```
### Semantic versioning in package.json
```json
  "dependencies": {
    "lodash": "^4.17.10"
    // 4 = major version. 17 = minor version, 10 = patch version
    // when others developer run `npm install`: 
    // ^ = install the latest minor version
    // ~ = keeps the minor version, only update patch version
    // if put nothing = install exactly what version stated in package.json
    // if put only * = install absolutely the latest version of the package
  }
```

