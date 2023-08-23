<template>
  <div>
    <table class="w-full border-collapse">
      <thead>
        <tr>
          <th class="py-2 pl-4"><h2 class="text-xl font-semibold">ID</h2></th>
          <th class="py-2 pl-4"><h2 class="text-xl font-semibold">Name</h2></th>
          <th class="pl-10"><h2 class="text-xl font-semibold">Location</h2></th>
          <th class="text-center w-full"><h2 class="text-xl font-semibold">No. of Workers</h2></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="project in ProjectStore.Projects"
          :key="project.id"
          class="border border-gray-300"
        >
          <td class="py-2 pl-4">{{ project.id }}</td>
          <td class="py-2 pl-4">{{ project.name }}</td>
          <td class="py-2 pl-10">{{ project.location }}</td>
          <td class="py-2 text-center">{{ project.workers }}</td>
          <td class="py-2">
            <EditProjectButton :data="project" />
            <button
              @click="ProjectStore.deleteProject(project.id)"
              class="m-2 px-3 py-1 bg-red-600 text-white rounded cursor-pointer button-hover"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { useProjectStore } from '@/stores/ProjectStore';
import EditProjectButton from "@/components/edit-project-button-component.vue"

const ProjectStore = useProjectStore();
</script>

<style scoped>
.text-xl {
  font-size: 1.25rem;
}

.font-semibold {
  font-weight: 600;
}

.border-collapse {
  border-collapse: collapse;
}

.border {
  border-width: 1px;
}

.border-gray-300 {
  border-color: transparent;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.pl-4 {
  padding-left: 1rem;
}

.pl-10 {
  padding-left: 2.5rem;
}

.text-center {
  text-align: center;
}

.w-full {
  width: 100%;
}

.m-2 {
  margin: 0.5rem;
}

.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.bg-red-600 {
  background-color: #dc2626;
}

.text-white {
  color: #fff;
}

.rounded {
  border-radius: 0.25rem;
}

.cursor-pointer {
  cursor: pointer;
}

.button-hover:hover {
  background-color: #e53e3e;
}

</style>
