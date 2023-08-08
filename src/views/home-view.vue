<script setup lang="ts">
import tableComponent from '@/components/table-component.vue';
import router from '@/router';
import { RouteName } from '@/constants/route-names';

function gotoWorkerButton(){
    router.push({ name: RouteName.WORKER })
}
</script>

<template>
    <div > 
        <h1 style="text-align: center; padding-bottom: 20px;">Project Manager</h1>
        <div style="text-align: center;">
          <button class="worker-button"
            @click="gotoWorkerButton">Workers
          </button>
          <button class="worker-button"
            @click="">New Project
          </button>
        </div>
        <tableComponent/>
    </div>
        
</template>

<style>
    .worker-button {
    padding: 10px 20px;
    margin-bottom: 30px;
    margin: 10px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }
  
  .worker-button:hover {
    background-color: #0056b3;
  }
  
  .worker-button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
  
  .worker-button:active {
    background-color: #004080;
  }
</style>
