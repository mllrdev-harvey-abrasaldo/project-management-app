<script setup lang="ts">
import workerComponent from '@/components/worker-component.vue';
import router from '@/router';

function backButton(){
    router.back();
}

</script>

<template>
    <div >
        <div style="text-align: left;">
            <button @click="backButton" class="back-button">back</button>
        </div>
        <h1 style="text-align: center; margin-bottom: 30px;">List of Workers</h1>
        <workerComponent></workerComponent>
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