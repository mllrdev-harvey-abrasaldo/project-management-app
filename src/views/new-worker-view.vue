<script setup lang="ts">
import router from '@/router';
import { useWorkerStore } from '@/stores/WorkerStore';
import { useProjectStore } from '@/stores/ProjectStore';
import { ref } from 'vue'

const WorkerStore = useWorkerStore();
const ProjectStore = useProjectStore();
let newName = ref('')
let selectedAssignment = ref(0)

    const addNewWorker = () => {
      const newWorker = {
        id: WorkerStore.addNextNumber(WorkerStore.workerIds),
        name: newName.value,
        assignmentId: selectedAssignment.value
      };

      WorkerStore.addWorker(newWorker);
      router.back()
    };

</script>

<template>
<div class="form-container">
  <form @submit.prevent="addNewWorker" class="worker-form">
    <label for="name" class="form-label">Name:</label>
    <input v-model="newName" type="text" id="name" class="form-input" />

    <label for="assignmentDropdown">Select Assignment:</label>
    <select v-model="selectedAssignment" id="assignmentDropdown">
      <option v-for="project in ProjectStore.Projects" :key="project.id" :value="project.id">{{ project.name }} in {{ project.location }}</option>
    </select>

    <button type="submit" class="form-button">Create Worker</button>
  </form>
</div>
</template>