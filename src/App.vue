<template>
  <DefaultLayout>
    <GameCanvas />
  </DefaultLayout>
</template>

<script>
import GameCanvas from "./components/GameCanvasComponent";
import DefaultLayout from "./layouts/DefaultLayout";

export default {
  components: {
    GameCanvas,
    DefaultLayout,
  },
  data() {
    return { selectedMaterial: "Sand" };
  },
  methods: {
    updateSelectedMaterial(material) {
      this.selectedMaterial = material;
    },
  },
};
</script>

<style scoped></style>
