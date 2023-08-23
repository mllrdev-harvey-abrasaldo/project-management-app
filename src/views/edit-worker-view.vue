<script setup lang="ts">
import { ref } from 'vue';
import { useWorkerStore } from '../stores/WorkerStore';
import {useWorker} from '@/composables/use-worker';
import router from '@/router';
import { useProjectStore } from '@/stores/ProjectStore';
import { RouteName } from '@/constants/route-names';

const WorkerStore = useWorkerStore();
const ProjectStore = useProjectStore();
const {worker} = useWorker();
const editedName = ref(worker.value.name);
const editedAssignmentId = ref(worker.value.assignmentId);

const saveChanges = () => {
    WorkerStore.editWorker(worker.value.id, { name: editedName.value, assignmentId: editedAssignmentId.value });
    backButton();
};

const backButton = () => {
  router.push('/worker')
}


</script>

<template>

<div style="width: 300px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px; background-color: #f7f7f7;">
  <h2 style="font-size: 24px; margin-bottom: 15px;">Edit Project</h2>
  <form style="display: flex; flex-direction: column;">
    <label for="name" style="font-size: 14px; margin-bottom: 5px;">Name:</label>
    <input v-model="editedName" type="text" id="name" style="padding: 8px; border: 1px solid #ccc; border-radius: 3px; margin-bottom: 10px;" />

    <label for="assignmentId" style="font-size: 14px; margin-bottom: 5px;">assignmentId</label>
    <select v-model="editedAssignmentId" id="assignmentDropdown" class="dropdown">
      <option v-for="project in ProjectStore.Projects" :key="project.id" :value="project.id">{{ project.name }} in {{ project.location }}</option>
    </select>

    <button @click.prevent="saveChanges()" type="submit" style="background-color: #007bff; color: #fff; border: none; border-radius: 3px; padding: 10px; font-size: 16px; cursor: pointer;">Save</button>
  </form>
  <button @click="backButton()" style="background-color: #ccc; color: black; border: none; border-radius: 3px; padding: 10px; font-size: 16px; cursor: pointer; margin-top: 10px;">Back</button>
</div>

</template>
  
<style>
  .input-field {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 10px;
  }

  .dropdown {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 10px;
    width: 100%;
  }

  .primary-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
  }

  .secondary-button {
    background-color: #ccc;
    color: black;
    border: none;
    border-radius: 3px;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px;
  }
</style>
