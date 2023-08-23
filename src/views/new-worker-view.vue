<script setup lang="ts">
import router from '@/router';
import { useWorkerStore } from '@/stores/WorkerStore';
import { useProjectStore } from '@/stores/ProjectStore';
import { ref } from 'vue'
import { RouteName } from '@/constants/route-names';

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
      router.push(RouteName.WORKER)
    };

</script>

<template>
  <div class="form-container">
    <form @submit.prevent="addNewWorker" class="worker-form">
      <label for="name" class="form-label">Name:</label>
      <input v-model="newName" type="text" id="name" class="form-input" />

      <label for="assignmentDropdown" class="form-label">Select Assignment:</label>
      <select v-model="selectedAssignment" id="assignmentDropdown" class="form-select">
        <option
          v-for="project in ProjectStore.Projects"
          :key="project.id"
          :value="project.id"
        >
          {{ project.name }} in {{ project.location }}
        </option>
      </select>

      <button type="submit" class="form-button">Create Worker</button>
    </form>
  </div>
</template>

<style scoped>

.form-container {
  max-width: 24rem;
  margin: 0 auto;
}

.worker-form {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  background-color: #fff;
}

.form-label {
  display: block;
  margin-bottom: 0.25rem;
  font-weight: 600;
}

.form-input,
.form-select {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  background-color: #f7f7f7;
}

.form-button {
  padding: 0.5rem 1rem;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-button:hover {
  background-color: #0056b3;
}

.form-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
}

.form-button:active {
  background-color: #004080;
}
</style>