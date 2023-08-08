<script setup lang="ts">

import { useWorkerStore } from '../stores/WorkerStore';

const WorkerStore = useWorkerStore();

</script>

<template>
    <table style="border-spacing: 20px; width: 100%;">
        <thead>
        <tr>
          <th style="text-align: left;"><h2>Name</h2></th>
          <th style="padding-left: 10px;text-align: left;"><h2>Assignment</h2></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="worker in WorkerStore.Workers"
          :key="worker.id"
          style="border: 1px solid #ccc;"
        >
          <td>{{ worker.name }}</td>
          <td style="padding: 8px; width: 150px;">{{ worker.assignment }}</td>
          <td style="padding: 8px;">
            <button style="margin-right: 5px; padding: 4px 8px; background-color: #007BFF; color: #fff; border: none; cursor: pointer;">
              Edit
            </button>
            <button style="padding: 4px 8px; background-color: #DC3545; color: #fff; border: none; cursor: pointer;">
              Delete
            </button>
          </td>
        </tr>
      </tbody>        
    </table>
</template>