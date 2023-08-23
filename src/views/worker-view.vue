<template>
  <div class="text-left">
    <div class="mb-6">
      <div class="mt-1">
        <h1 class="text-left text-2xl font-bold">List of Workers</h1>
      </div>
      <button
        @click="backButton"
        class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mr-2"
      >
        Back
      </button>
      <button @click="addWorkerButton" class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">
        Add Worker
      </button>
    </div>
    <workerTableComponent></workerTableComponent>
  </div>
</template>


<script setup lang="ts">
import workerTableComponent from '@/components/worker-table-component.vue';
import { RouteName } from '@/constants/route-names';
import router from '@/router';

function backButton() {
  router.push('/');
}

function addWorkerButton() {
  router.push(RouteName.ADDWORKER)
}
</script>

<style scoped>
.mt-1 {
  margin-bottom: 1rem;
}
</style>