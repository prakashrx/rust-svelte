<script>
  export let name;
  export let bindings;
</script>

<main class="flex justify-center items-center h-screen flex-col space-y-5">
  <div class="text-5xl text-slate-600">Hello {name}!</div>
  <div class="text-2xl text-gray-900">Wasm Add 5 + 7 = {bindings.add(5, 7)}</div>
</main>
