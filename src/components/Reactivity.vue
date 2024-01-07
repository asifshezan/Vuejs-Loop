<script setup>
import { ref } from 'vue';

const tasks = ref([
    {id:1, name: 'Task 1'},
    {id:2, name: 'Task 2'},
    {id:3, name: 'Task 3'},
    {id:4, name: 'Task 4'},
]);

function addNewTask() {
        const newTask = {
        id: tasks.value.length+1,
        name: `Task ${tasks.value.length+1}`,
        }
        tasks.value.push(newTask);
    }



</script>

<template>
 <div>
    <p v-for="task in tasks" :key="task.id">{{ task.name }}</p>
    <button @click="addNewTask()">Add New Task</button>
 </div>
</template>

<style scoped></style>