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
    <button @click="toView" style="padding: 4px 8px; background-color: blue; color: #fff; border: none; cursor: pointer;">Edit Project</button>
</template>