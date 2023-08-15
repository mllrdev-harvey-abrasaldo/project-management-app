<script setup lang="ts">
import type {IWorker} from '../interface/workers';
import  type {PropType}  from 'vue';
import router from '@/router';
import { RouteName } from '@/constants/route-names';
import {useWorker} from '../composables/use-worker';

const { worker } =  useWorker();

const thisWorker = defineProps({
    data: {
      type: Object as PropType<IWorker>,
      required: true,
    },
})

function toView() {
    worker.value = thisWorker.data
    router.push({ name: RouteName.EDITWORKER, params: { id: thisWorker.data.id } });
}

</script>

<template>
    <button @click="toView" style="padding: 4px 8px; background-color: blue; color: #fff; border: none; cursor: pointer;">Edit Worker</button>
</template>