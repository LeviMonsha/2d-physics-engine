<template>
  <canvas ref="canvas" class="border border-gray-600"></canvas>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { ref, onMounted } from "vue";
import { usePhysics } from "@/composables/usePhysics";

export default {
  mounted() {
    this.setupCanvas();
    this.animate();
  },
  methods: {
    setupCanvas() {
      const canvas = this.$refs.canvas;
      this.context = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      this.physics = usePhysics(this.$refs.canvas);
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.context.clearRect(
        0,
        0,
        this.context.canvas.width,
        this.context.canvas.height
      );

      this.physics.updateParticles();
      this.physics.drawParticles(this.context);
    },
  },
};
</script>

<style scoped>
canvas {
  display: block;
}
</style>
