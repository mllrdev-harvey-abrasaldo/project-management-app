import type  {IProject}  from '@/interface/projects';
import { ref } from 'vue';

const project = ref<IProject>({
    id: -1,
    name: "noProjectName",
    location: 'noProjectLocation',
    workers: -1,

});

export function useProject(){
    return {project};
}
