<script setup lang="ts">
import router from '@/router';
import { useProjectStore } from '@/stores/ProjectStore';
import { ref } from 'vue'

const projectStore = useProjectStore();
let newName = ref('')
let newLocation = ref('')
let newWorker = ref(0)

    const addNewProject = () => {
      const newProject = {
        id: projectStore.addNextNumber(projectStore.ProjectIds),
        name: newName.value,
        location: newLocation.value,
        workers: newWorker.value,
      };

      projectStore.addProject(newProject);
      router.back()
    };

</script>

<template>
<div class="form-container">
  <form @submit.prevent="addNewProject" class="project-form">
    <label for="name" class="form-label">Name:</label>
    <input v-model="newName" type="text" id="name" class="form-input" />

    <label for="location" class="form-label">Location:</label>
    <input v-model="newLocation" type="text" id="location" class="form-input" />

    <button type="submit" class="form-button">Create Project</button>
  </form>
</div>
</template>

<style>
.form-container {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f7f7f7;
}

.project-form {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-size: 14px;
  margin-bottom: 5px;
}

.form-input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 10px;
}

.form-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}</style>