<template>
  <div id="app">
    store count: {{$store.state.count}}
    <br>
    <button @click="$store.commit('increment')">add</button>
  </div>
</template>

<script>
export default {
  name: "app",
  mounted() {
    window.addEventListener("storage", e => {
      if (e.key !== "vuex") return;

      // exit if no change
      if (e.newValue === JSON.stringify(this.$store.state)) return;

      const persistedData = JSON.parse(e.newValue);

      this.$store.commit("setAll", persistedData);
    });
  }
};
</script>
