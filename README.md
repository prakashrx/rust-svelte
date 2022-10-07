# Rust Wasm + Svelte + Tailwind Template

A starter template to connect rust + svelte + tailwindcss.

## Directory stucture

```
project
│   README.md
|
└───public           --> output directory
│   │   index.html
│   └───build
|
└───wasm             --> rust wasm source directory
│   │   Cargo.toml
│   └───src
│       │   lib.rs
└───src              --> svelte source directory
    │   App.svelte
```

## Build

```sh
npm run build
```

The output would be in `public` folder

## Develop

```sh
npm run dev
```
