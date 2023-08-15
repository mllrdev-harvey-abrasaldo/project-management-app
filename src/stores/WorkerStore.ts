import type { IWorker } from '@/interface/workers';
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useProjectStore } from './ProjectStore';
import router from '@/router';

export const useWorkerStore = defineStore('WorkerStore', () => {

    const Workers = ref([
        {id: 1, name: 'Harvey', assignmentId: 1},
        {id: 2, name: 'Joshua', assignmentId: 2},
        {id: 3, name: 'Zyr', assignmentId: 3},
        {id: 4, name: 'kit', assignmentId: 1}
    ])

    let workerIds = ref(getAllWorkerIds())
    const ProjectStore = ref(useProjectStore())

    function addWorker(newWorker: IWorker) {
        Workers.value.push(newWorker);
        ProjectStore.value.updateProjectWorkers()
      }

    function deleteWorker(workerId: Number) {
        const index = Workers.value.findIndex((worker) => worker.id === workerId);
        if (index !== -1) {
        Workers.value.splice(index, 1);
        workerIds.value = getAllWorkerIds()
        ProjectStore.value.updateProjectWorkers();
        }
    }

    function editWorker(workerId: number, updatedWorker: Partial<IWorker>) {    //this function still needs revision
        const index = Workers.value.findIndex(worker => worker.id === workerId);
        if (index !== -1) {
            Workers.value[index] = { ...Workers.value[index], ...updatedWorker };
        }
        ProjectStore.value.updateProjectWorkers();
    }

    function addNextNumber(arr: number[]): number {
    
        // Sort the array in ascending order
        arr.sort((a, b) => a - b);
    
        // Find the first missing number
        let nextNumber = arr[0];
        
        // If the first number is not 1, return 1
        if (nextNumber !== 1) {
            arr.unshift(1);
            return 1;
        }
        
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== nextNumber) {
                arr.splice(i, 0, nextNumber);
                return nextNumber;
            }
            nextNumber++;
        }
    
        // If all numbers are consecutive, add the next sequential number
        arr.push(nextNumber);
        return nextNumber;
    }

    function getAllWorkerIds() {
        return Workers.value.map(worker => worker.id);
    }

    return { Workers, deleteWorker, addWorker, addNextNumber, editWorker, workerIds }
})