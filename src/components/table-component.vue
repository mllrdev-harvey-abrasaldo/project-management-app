<script setup lang="ts">
import { useProjectStore } from '../stores/ProjectStore';
import EditProjectButton from "@/components/edit-project-button-component.vue"

const ProjectStore = useProjectStore();
</script>

<template>
  <table style="border-spacing: 30px; width: 100%;">
    <thead>
        <tr>
          <th style="text-align: left;"><h2>Name</h2></th>
          <th style="padding-left: 10px;text-align: left;"><h2>Location</h2></th>
          <th style="text-align: center; width: 100%;"><h2>No. of Workers</h2></th>
        </tr>
      </thead>
    <tbody>
      <tr
        v-for="project in ProjectStore.Projects"
        :key="project.id"
        style="border: 1px solid #ccc;"
      >
        <td>{{ project.name }}</td>
          <td style="padding: 8px; width: 150px;">{{ project.location }}</td>
          <td style="text-align: center; padding: 8px;">{{ project.workers }}</td>
        <td style="padding: 10px; width: 100%;">
          <EditProjectButton :data="project"></EditProjectButton>
          <button @click="ProjectStore.deleteProject(project.id)" style="margin: 5px; padding: 4px 12px; background-color: red; color: #fff; border: none; cursor: pointer;">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

  

<style></style>