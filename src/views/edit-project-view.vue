<script setup lang="ts">
import { ref } from 'vue';
import { useProjectStore } from '../stores/ProjectStore';
import {useProject} from '@/composables/use-project';
import router from '@/router';

const ProjectStore = useProjectStore();
const {project} = useProject();
const editedProject = ref(null);

const submitForm = () => {
      if (editedProject.value) {
        ProjectStore.editProject(project.value.id, editedProject.value);
      }
      router.back()
    };

</script>

<template>

  <div>
    <h2>Edit Project</h2>
    <form @submit.prevent="submitForm">
      <label for="name">Name:</label>
      <input v-model="project.name" type="text" id="name" />

      <label for="location">Location:</label>
      <input v-model="project.location" type="text" id="location" />

      <label for="workers">Workers:</label>
      <input v-model.number="project.workers" type="number" id="workers" />

      <button type="submit">Save</button>
    </form>
  </div>

</template>
  
<style>
</style>