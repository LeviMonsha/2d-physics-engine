import { ref, onMounted, onUnmounted } from "vue";

export function usePhysics(canvas) {
  const particles = ref([]);

  const createParticle = (x, y) => {
    return {
      x,
      y,
      size: Math.random() * 5 + 2,
      speed: Math.random() * 2 + 1,
    };
  };

  const addParticle = (event) => {
    const rect = canvas.value.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    particles.value.push(createParticle(x, y));
  };

  const updateParticles = () => {
    particles.value.forEach((particle) => {
      particle.y += particle.speed;
      if (particle.y > canvas.value.height) {
        particle.y = canvas.value.height;
      }
    });
  };

  const drawParticles = (context) => {
    particles.value.forEach((particle) => {
      context.fillStyle = "gold";
      context.beginPath();
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.fill();
    });
  };

  onMounted(() => {
    canvas.value.addEventListener("click", addParticle);
  });

  onUnmounted(() => {
    canvas.value.removeEventListener("click", addParticle);
  });

  return { particles, updateParticles, drawParticles };
}
