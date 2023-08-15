<script setup lang="ts">

import { useProjectStore } from '@/stores/ProjectStore';
import { useWorkerStore } from '../stores/WorkerStore';
import { ref } from 'vue'
import EditWorkerButton from './edit-worker-button-component.vue';

const WorkerStore = useWorkerStore();
const ProjectStore = useProjectStore();

function getProjectNameByAssignmentId(assignmentId: number): string {
  if (assignmentId !==0 ){
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
    <table style="border-spacing: 20px; width: 100%;">
        <thead>
        <tr>
          <th style="text-align: left;"><h2>Id</h2></th>
          <th style="text-align: left;"><h2>Name</h2></th>
          <th style="padding-left: 10px; text-align: center;"><h2>Assignment</h2></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="worker in WorkerStore.Workers"
          :key="worker.id"
          style="border: 1px solid #ccc;"
        >
        <td style="padding: 8px; width: 150px; text-align: left;">{{ worker.id }}</td>
          <td>{{ worker.name }}</td>
          <td style="padding: 8px; width: 150px; text-align: center;">    
            {{ getProjectNameByAssignmentId(worker.assignmentId) }}
          </td>
          <td style="padding: 8px;">
            <EditWorkerButton :data="worker">
            </EditWorkerButton>
            <button @click="WorkerStore.deleteWorker(worker.id)" style="padding: 4px 8px; background-color: #DC3545; color: #fff; border: none; cursor: pointer;">
              Delete
            </button>
          </td>
        </tr>
      </tbody>        
    </table>
</template>