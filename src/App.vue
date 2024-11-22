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
};
</script>

<style scoped></style>
