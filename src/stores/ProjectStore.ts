import { defineStore } from 'pinia'
import {ref} from 'vue'
import type { IProject } from '@/interface/projects'
import {projectData} from '../data/Projects'
import { useWorkerStore } from '../stores/WorkerStore'

export const useProjectStore = defineStore('ProjectStore', () => {

    const WorkerStore = useWorkerStore();
    let Projects = ref(projectData);
    let ProjectIds = ref(getAllProjectIds())
    let WorkerAssignment = ref(updateProjectWorkers())

    function addProject(newProject: IProject) {
        Projects.value.push(newProject);
      }

    function deleteProject(projectId: Number) {
        const index = Projects.value.findIndex((project) => project.id === projectId);
        if (index !== -1) {
        const deletedProject = Projects.value.splice(index, 1)[0];
        WorkerStore.Workers.forEach(worker => {
            if (worker.assignmentId === deletedProject.id) {
                worker.assignmentId = 0;
            }
        });
        }
        ProjectIds.value = getAllProjectIds()
    }

    function editProject(projectId: number, updatedProject: Partial<IProject>) {
        const index = Projects.value.findIndex(project => project.id === projectId);
        if (index !== -1) {
            Projects.value[index] = { ...Projects.value[index], ...updatedProject };
        }
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

    function getAllProjectIds() {
        return Projects.value.map(project => project.id);
    }

    function updateProjectWorkers() {
        for (const project of Projects.value) {
            const assignedWorkers = WorkerStore.Workers.filter(worker => worker.assignmentId === project.id);
            project.workers = assignedWorkers.length;
        }
    }


    return { Projects, deleteProject, editProject, addProject, ProjectIds, addNextNumber, updateProjectWorkers}
})