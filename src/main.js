import App from "./App.svelte";
import wasm from "../wasm/Cargo.toml";
import "./tailwind.css";

const init = async () => {
  const bindings = await wasm();
  const app = new App({
    target: document.body,
    props: {
      bindings,
      name: "world",
    },
  });
};

init();

export default app;
