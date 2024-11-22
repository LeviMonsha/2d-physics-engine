<template>
  <div
    class="menu-container max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg"
  >
    <h2 class="text-2xl font-semibold text-center mb-4">Elements:</h2>
    <ul class="space-y-2 list-none">
      <li
        v-for="material in materials"
        :key="material.name"
        @click="selectMaterial(material.name)"
        class="flex items-center p-3 bg-gray-100 rounded-lg transition duration-200 hover:bg-blue-200 cursor-pointer shadow-sm hover:shadow-md"
      >
        <img
          :src="require(`@/assets/images/ui/${material.image}`)"
          class="h-12 w-12 object-cover mr-3 rounded-full border border-gray-300"
          :alt="material.name"
        />
        <span class="text-lg font-medium text-gray-800">{{
          material.name
        }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      materials: [
        { name: "Sand", image: "sand_ui.png" },
        { name: "Water", image: "water_ui.png" },
        { name: "Fire", image: "fire_ui.png" },
        { name: "Earth", image: "earth_ui.png" },
      ],
    };
  },
  methods: {
    selectMaterial(material) {
      console.log(`Selected material: ${material}`);
    },
  },
};
</script>

<style scoped></style>
