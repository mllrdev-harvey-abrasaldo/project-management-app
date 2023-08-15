<script setup lang="ts">
import workerTableComponent from '@/components/worker-table-component.vue';
import { RouteName } from '@/constants/route-names';
import router from '@/router';
import { useWorkerStore } from '@/stores/WorkerStore';
import { ref } from 'vue'

const WorkerStore = ref(useWorkerStore())

function backButton(){
    router.back();
}

function addWorkerButton() {
  router.push(RouteName.ADDWORKER)
}

</script>

<template>
    <div >
        <div style="text-align: left;">
            <button @click="backButton" class="back-button">back</button>
        </div>
        {{ WorkerStore.workerIds }}
        <div>
          <h1 style="text-align: left; margin-bottom: 30px;">List of Workers</h1>
          <button @click="addWorkerButton" class="back-button">Add Worker</button>
        </div>
        <workerTableComponent></workerTableComponent>
    </div>
        
</template>

<style>
    .back-button {
    padding: 10px 20px;
    margin-bottom: 30px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }
  
  .back-button:hover {
    background-color: #0056b3;
  }
  
  .back-button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
  
  .back-button:active {
    background-color: #004080;
  }
</style>