<template>
  <div>
    <div>
      <h2>Elements:</h2>
      <ul>
        <li
          v-for="material in materials"
          :key="material"
          @click="selectMaterial(material)"
          class="cursor-pointer hover:bg-gray-700 p-2 rounded"
        >
          <img
            :src="require('@/assets/images/ui/sand_ui.png')"
            class="h-16 w-16 object-cover"
            alt="elem"
          />
          {{ material }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      materials: ["Sand", "Water", "Fire", "Earth"],
    };
  },
  methods: {
    selectMaterial(material) {
      console.log(`material: ${material}`);
    },
  },
};
</script>

<style scoped></style>
