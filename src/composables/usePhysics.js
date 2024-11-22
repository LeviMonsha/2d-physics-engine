// eslint-disable-next-line no-unused-vars
import { ref } from "vue";

export function usePhysics() {
  const updatePosition = (object) => {
    object.x += object.vx;
    object.y += object.vy;

    if (object.x < 0 || object.x > window.innerWidth) {
      object.vx += -1;
    }
    if (object.y < 0 || object.y > window.innerHeight) {
      object.vy += -1;
    }
  };
  return { updatePosition };
}
