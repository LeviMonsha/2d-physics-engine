<template>
  <canvas ref="canvas" class="border border-gray-600"></canvas>
</template>

<script>
export default {
  mounted() {
    this.setupCanvas();
  },
  methods: {
    setupCanvas() {
      const canvas = this.$refs.canvas;
      const context = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      context.fillStyle = "lightblue";
      context.fillRect(0, 0, canvas.width, canvas.height);
    },
  },
};
</script>

<style scoped>
canvas {
  display: block;
}
</style>
