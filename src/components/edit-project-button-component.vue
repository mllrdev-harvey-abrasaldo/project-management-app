<script setup lang="ts">
import type {IProject} from '../interface/projects';
import  type {PropType}  from 'vue';
import router from '@/router';
import { RouteName } from '@/constants/route-names';
import {useProject} from '../composables/use-project';

const { project } =  useProject();

const thisProject = defineProps({
    data: {
      type: Object as PropType<IProject>,
      required: true,
    },
})

function toView() {
    project.value = thisProject.data
    router.push({ name: RouteName.EDITPROJECT, params: { id: thisProject.data.id } });
}

</script>

<template>
  <button
    @click="toView"
    class="px-2 py-1 bg-blue-500 text-white border-none cursor-pointer hover:bg-blue-600 active:bg-blue-700">
    Edit Project
  </button>
</template>