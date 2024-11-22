<template>
  <div class="fixed top-4 right-4 z-50">
    <div class="menu-container max-w-xs p-4 bg-white rounded-lg shadow-lg">
      <h2 class="text-xl font-semibold text-center mb-2">Game Menu</h2>
      <div class="grid grid-cols-1 gap-2">
        <ParticleMenu />
        <CharactersMenu />
        <TasksMenu />
      </div>
    </div>
  </div>
</template>

<script>
import ParticleMenu from "./ui/ParticleMenuUI";
import CharactersMenu from "./ui/CharactersMenuUI.vue";
import TasksMenu from "./ui/TasksMenuUI.vue";

export default {
  components: {
    ParticleMenu,
    CharactersMenu,
    TasksMenu,
  },
};
</script>

<style scoped></style>
