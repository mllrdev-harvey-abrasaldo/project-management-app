import { defineStore } from 'pinia'
import {ref} from 'vue'
import type { IProject } from '@/interface/projects'
import {projectData} from '../data/Projects'

export const useProjectStore = defineStore('ProjectStore', () => {

    const Projects = ref(projectData);
    const ProjectIds = ref(getAllProjectIds())

    function addProject(newProject: IProject) {
        Projects.value.push(newProject);
      }

    function deleteProject(projectId: Number) {
        const index = Projects.value.findIndex((project) => project.id === projectId);
        if (index !== -1) {
        Projects.value.splice(index, 1);
        }
        ProjectIds.value = getAllProjectIds()
    }

    function editProject(projectId: Number, updatedProject: IProject[]) {
        const index = Projects.value.findIndex(project => project.id === projectId);
        if (index !== -1) {
            Projects.value[index] = { ...Projects.value[index], ...updatedProject };
        }
    }

    function addNextNumber(arr: number[]): number {
        if (arr.length === 0) {
            arr.push(1);
            return 1;
        }
    
        // Sort the array in ascending order
        arr.sort((a, b) => a - b);
    
        // Find the first missing number
        let nextNumber = arr[0];
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

    return { Projects, deleteProject, editProject, addProject, ProjectIds, addNextNumber}
})