## nestjs-ts-transform-paths

nest-cli plugin with [typescript-transform-paths](https://github.com/LeDDGroup/typescript-transform-paths#readme)

### The issue

[TypeScript paths are not resolved in definition files](https://github.com/microsoft/TypeScript/issues/32999)

### Install

```
yarn add --dev nestjs-ts-transform-paths
```

### Usage

Add `nestjs-ts-transform-paths` into `nest-cli.json`

```json
{
  "collection": "@nestjs/schematics",
  "compilerOptions": {
    "plugins": ["nestjs-ts-transform-paths"]
  }
}
```
