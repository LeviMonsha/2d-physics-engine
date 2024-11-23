<template>
  <div class="relative w-full min-h-screen bg-lightblue">
    <canvas
      ref="canvas"
      class="absolute inset-0 cursor-crosshair"
      @click="addParticle"
      @mousemove="updateCursor"
    ></canvas>
    <div
      v-if="cursorVisible"
      class="cursor-indicator"
      :style="{ top: cursorY + 'px', left: cursorX + 'px' }"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      particles: [],
      cursorX: 0,
      cursorY: 0,
      cursorVisible: false,
      gridSize: 10,
    };
  },
  methods: {
    addParticle(event) {
      const rect = this.$refs.canvas.getBoundingClientRect();
      const x =
        Math.floor((event.clientX - rect.left) / this.gridSize) *
          this.gridSize +
        5;
      const y =
        Math.floor((event.clientY - rect.top) / this.gridSize) * this.gridSize +
        5;

      const isOccupied = this.particles.some((particle) => {
        return (
          Math.floor(particle.x / this.gridSize) * this.gridSize + 5 === x &&
          Math.floor(particle.y / this.gridSize) * this.gridSize + 5 === y
        );
      });

      if (isOccupied) {
        return;
      }

      this.particles.push({
        x,
        y,
        size: 5,
        speed: 2,
        color: this.getRandomColor(),
        isFalling: true,
      });
    },
    updateCursor(event) {
      this.cursorX = event.clientX;
      this.cursorY = event.clientY;
      this.cursorVisible = true;
    },
    drawGrid(ctx) {
      ctx.strokeStyle = "rgba(0, 0, 0, 0.2)";
      ctx.lineWidth = 1;

      for (
        let x = this.gridSize;
        x < this.$refs.canvas.width;
        x += this.gridSize
      ) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, this.$refs.canvas.height);
        ctx.stroke();
      }

      for (
        let y = this.gridSize;
        y < this.$refs.canvas.height;
        y += this.gridSize
      ) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(this.$refs.canvas.width, y);
        ctx.stroke();
      }
    },
    drawParticles() {
      const ctx = this.$refs.canvas.getContext("2d");
      ctx.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height);

      // this.drawGrid(ctx); // Игровая сетка

      this.particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        if (particle.isFalling) {
          particle.y += particle.speed;

          if (particle.y >= this.$refs.canvas.height - particle.size) {
            particle.y = this.$refs.canvas.height - particle.size;
            particle.isFalling = false;
          }

          for (let other of this.particles) {
            if (
              other !== particle &&
              !other.isFalling &&
              this.isColliding(particle, other)
            ) {
              particle.y = other.y - particle.size - 5;
              particle.isFalling = false;
              break;
            }
          }
        }

        particle.x = Math.floor(particle.x / this.gridSize) * this.gridSize + 5;
      });
    },
    isColliding(particle1, particle2) {
      const dx = particle1.x - particle2.x;
      const dy = particle1.y - particle2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      return distance < particle1.size + particle2.size;
    },
    animate() {
      this.drawParticles();
      requestAnimationFrame(this.animate);
    },
    // resizeCanvas() {
    //   const canvas = this.$refs.canvas;
    //   canvas.width = window.innerWidth;
    //   canvas.height = window.innerHeight;
    // },
    getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
  },

  mounted() {
    // this.resizeCanvas();
    // window.addEventListener("resize", this.resizeCanvas);
    this.animate();
  },

  // eslint-disable-next-line vue/no-deprecated-destroyed-lifecycle
  // beforeDestroy() {
  //   window.removeEventListener("resize", this.resizeCanvas);
  // },
};
</script>

<style scoped>
.bg-lightblue {
  background-color: #add8e6;
}

.cursor-indicator {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
}
</style>
