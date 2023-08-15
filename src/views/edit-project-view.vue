<script setup lang="ts">
import { ref } from 'vue';
import { useProjectStore } from '../stores/ProjectStore';
import {useProject} from '@/composables/use-project';
import router from '@/router';

const ProjectStore = useProjectStore();
const {project} = useProject();
const editedName = ref(project.value.name);
const editedLocation = ref(project.value.location);

const saveChanges = () => {
    ProjectStore.editProject(project.value.id, { name: editedName.value, location: editedLocation.value });
    backButton();
};

const backButton = () => {
  router.push('/')
}


</script>

<template>

<div style="width: 300px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px; background-color: #f7f7f7;">
  <h2 style="font-size: 24px; margin-bottom: 15px;">Edit Project</h2>
  <form style="display: flex; flex-direction: column;">
    <label for="name" style="font-size: 14px; margin-bottom: 5px;">Name:</label>
    <input v-model="editedName" type="text" id="name" style="padding: 8px; border: 1px solid #ccc; border-radius: 3px; margin-bottom: 10px;" />

    <label for="location" style="font-size: 14px; margin-bottom: 5px;">Location:</label>
    <input v-model="editedLocation" type="text" id="location" style="padding: 8px; border: 1px solid #ccc; border-radius: 3px; margin-bottom: 10px;" />

    <button @click.prevent="saveChanges()" type="submit" style="background-color: #007bff; color: #fff; border: none; border-radius: 3px; padding: 10px; font-size: 16px; cursor: pointer;">Save</button>
  </form>
  <button @click="backButton()" style="background-color: #ccc; color: black; border: none; border-radius: 3px; padding: 10px; font-size: 16px; cursor: pointer; margin-top: 10px;">Back</button>
</div>

</template>
  
<style>
</style>