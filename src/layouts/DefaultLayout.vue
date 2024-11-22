<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <header class="p-4 bg-gray-800">
      <h1 class="text-x1">2d Game Engine</h1>
      <UIComponent />
    </header>
    <main class="p-4">
      <slot />
    </main>
  </div>
</template>

<script>
import UIComponent from "../components/UIComponent";

export default {
  components: {
    UIComponent,
  },
};
</script>

<style scoped></style>
