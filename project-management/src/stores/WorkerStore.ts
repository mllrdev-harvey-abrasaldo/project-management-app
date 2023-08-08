import { defineStore } from 'pinia'

export const useWorkerStore = defineStore('WorkerStore', () => {
    const Workers = [
        {id: 1, name: 'Harvey', assignment: 'Dumaguete'},
        {id: 2, name: 'Joshua', assignment: 'Siaton'},
        {id: 3, name: 'Zyr', assignment: 'Amlan'}
    ]

    return { Workers }
})