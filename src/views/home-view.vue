<template>
  <div class="flex justify-center items-center h-screen">
  <div class="text-center">
    <h1 class="text-4xl font-semibold pb-8">Project Manager</h1>
    <div class="space-x-4">
      <button
        class="btn"
        @click="gotoWorkerButton"
      >
        Workers
      </button>
      <button
        class="btn"
        @click="gotoNewProjectButton"
      >
        New Project
      </button>
    </div>
    <tableComponent />
  </div>
</div>
</template>

<script setup lang="ts">
import tableComponent from '@/components/table-component.vue';
import router from '@/router';
import { RouteName } from '@/constants/route-names';

function gotoWorkerButton() {
  router.push({ name: RouteName.WORKER });
}

function gotoNewProjectButton() {
  router.push({ name: RouteName.ADDPROJECT });
}
</script>

<style scoped>
.btn {
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
  margin: 0.5rem;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}

.btn:focus {
  outline: none;
  box-shadow: 0 0 0 0.1875rem rgba(0, 123, 255, 0.5);
}

.btn:active {
  background-color: #004080;
}
</style>
