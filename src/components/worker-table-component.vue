<script setup lang="ts">

import { useProjectStore } from '@/stores/ProjectStore';
import { useWorkerStore } from '../stores/WorkerStore';
import EditWorkerButton from './edit-worker-button-component.vue';

const WorkerStore = useWorkerStore();
const ProjectStore = useProjectStore();

function getProjectNameByAssignmentId(assignmentId: number): string {
  if (assignmentId !== 0 ){
    const assignedProject = ProjectStore.Projects.find(project =>
      WorkerStore.Workers.some(worker => worker.assignmentId === assignmentId && worker.assignmentId === project.id)
    );

    return assignedProject ? assignedProject.name + ' in ' + assignedProject.location : 'Project not Found' ;
  }
  else {
    return 'Not Assigned';
  }

};

</script>

<template>
  <table class="w-full border-collapse">
    <thead>
      <tr>
        <th class="py-2 pl-4 text-xl font-semibold">Id</th>
        <th class="py-2 pl-4 text-xl font-semibold">Name</th>
        <th class="pl-10 text-xl font-semibold">Assignment</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="worker in WorkerStore.Workers"
        :key="worker.id"
        class="border-t border-gray-300"
      >
        <td class="py-2 pl-4">{{ worker.id }}</td>
        <td class="py-2 pl-4">{{ worker.name }}</td>
        <td class="py-2 pl-10">
          {{ getProjectNameByAssignmentId(worker.assignmentId) }}
        </td>
        <td class="py-2 space-x-4">
          <EditWorkerButton :data="worker" />
          <button
            @click="WorkerStore.deleteWorker(worker.id)"
            class="px-2 py-1 bg-red-600 text-white border-none rounded cursor-pointer hover:bg-red-700 active:bg-red-800"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

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

.border-gray-300 {
  border-color: transparent;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-right: 2rem;
}

.pl-4 {
  padding-left: 1rem;
}

.pl-10 {
  padding-left: 2.5rem;
}

.w-full {
  width: 100%;
}

.hover\:bg-red-700:hover {
  background-color: #dc2626;
}

.active\:bg-red-800:active {
  background-color: #c53030;
}

.cursor-pointer {
  cursor: pointer;
}

.space-x-4 {
  margin-left: 5rem;
}

</style>