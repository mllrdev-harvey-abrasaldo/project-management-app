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
    <form @submit.prevent="addNewProject">
      <label for="name">Name:</label>
      <input v-model="newName" type="text" id="name" />
      <label for="location">Location:</label>
      <input v-model="newLocation" type="text" id="location" />
      <label for="worker">No. of Workers</label>
      <input v-model="newWorker" type="number" id="worker" />
      <button type="submit">Save</button>
    </form>
</template>