import { tasks } from './Reactivity.vue';

() => {
const newTask = {
id: tasks.value.length + 1,
name: 'Task ${tasks.value.length+1}'
};

tasks.value.push(newTask);
};
