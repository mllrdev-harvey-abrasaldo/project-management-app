import type  {IWorker}  from '@/interface/workers';
import { ref } from 'vue';

const worker = ref<IWorker>({
    id: -1,
    name: "noName",
    assignmentId: -1,

});

export function useWorker(){
    return {worker};
}
