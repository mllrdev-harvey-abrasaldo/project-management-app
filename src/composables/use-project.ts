import type  {IProject}  from '@/interface/projects';
import { ref } from 'vue';

const project = ref<IProject>({
    id: 12345,
    name: "noProjectName",
    location: 'noProjectLocation',
    workers: 0,

});

export function useProject(){
    return {project};
}
