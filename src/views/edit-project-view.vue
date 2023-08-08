<script setup lang="ts">
import { ref } from 'vue';
import { useProjectStore } from '../stores/ProjectStore';
import {useProject} from '@/composables/use-project';
import type {IProject} from '@/interface/projects';
import router from '@/router';

const ProjectStore = useProjectStore();
const {project} = useProject();

// Save the changes and update the project data in the store
const saveChanges = (projectId: IProject) => {
  // Find the project in the store based on the project ID
  const projectIndex = ProjectStore.Projects.findIndex(
    (singleproject) => singleproject.id === projectId.id
  );

  if (projectIndex !== -1) {
    // Update the project data in the store
    ProjectStore.Projects[projectIndex] = projectId;
  }

  // Redirect back to the list page after saving the changes
  router.push('/');
};

</script>

<template>
    <div class="edit-project">
    <!-- Display and edit the project data here -->
    <h2>Edit Project - {{ project.name }}</h2>
    <div class="form-field">
      <label for="location">Location:</label>
      <input :value="project.location" id="location" />
    </div>
    <div class="form-field">
      <label for="workers">No. of Workers:</label>
      <input :value="project.workers" id="workers" />
    </div>
    <button @click="saveChanges(project)">Save Changes</button>
  </div>
  </template>
  
  <style>
.edit-project {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
}

h2 {
  margin-bottom: 20px;
}

.form-field {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 8px 16px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>