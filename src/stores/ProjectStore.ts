import { defineStore } from 'pinia'
import {ref} from 'vue'

export const useProjectStore = defineStore('ProjectStore', () => {
    const Projects = ref([
        {id: 1, name: 'Bridge', location: 'Dumaguete', workers: 10},
        {id: 2, name: 'Road', location: 'Siaton', workers: 15},
        {id: 3, name: 'House', location: 'Amlan', workers: 20}
    ])

    function deleteProject(projectId: Number) {
        const index = Projects.value.findIndex((project) => project.id === projectId);
        if (index !== -1) {
        Projects.value.splice(index, 1);
        }
    }

    return { Projects, deleteProject }
})