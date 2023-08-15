import type  {IWorker}  from '@/interface/workers';
import { ref } from 'vue';

const worker = ref<IWorker>({
    id: 0,
    name: "noName",
    assignmentId: 0,

});

export function useWorker(){
    return {worker};
}
