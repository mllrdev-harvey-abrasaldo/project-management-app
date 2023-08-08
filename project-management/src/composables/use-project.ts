import type  {IProject}  from '@/interface/projects';
import { ref } from 'vue';

const project = ref<IProject>();

export function useProject(){
    return {project};
}