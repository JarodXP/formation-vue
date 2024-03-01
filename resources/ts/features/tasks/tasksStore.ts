import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTasksStore = defineStore('tasks', () => {
    const selectedId = ref();

    return { selectedId };
});
