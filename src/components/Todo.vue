<script setup>

const numbers = [1,5,9,12,15,18,20];
const todos = [
    {id: 1, task:"Taking vue.js class", status: 'In Progress'},
    {id: 2, task:"Upload source code", status: 'Pending'},
    {id: 3, task:"Check quiz question", status: 'Done'},
    {id: 4, task:"Ready quiz question", status: 'Done'}
];

const persons = {
    Name: 'Asif Ahamed',
    Age: 26,
    Gender: 'Male',
    Profession: 'Web Developer'
}

</script>

<template>
    <div>
        <!-- <p v-for="(number, index) in numbers" :key="index">{{ index+":"+number }}</p> -->
        <p v-for="(number, index) in 8" :key="index">{{ index+":"+number }}</p>

        <p v-for="todo in todos" :key="todos.id">{{ todo.task }}</p>

        <h1>In Progress</h1>

        <ul>
            <template v-for="todo in todos" :key="todo.id">
                <li v-if="'In Progress' == todo.status">
                    {{ todo.task }}
                </li>
            </template>
        </ul>

        <!-- <ul v-for="todo in todos" :key="todo.id" >
            <template>
                <li v-if="'In Progress' == todo.status">{{ todo.task }}</li>       
              </template>
        </ul> -->

        <h1>Pending</h1>
        <ul>
            <li v-for="todo in todos" :key="todo.id" v-show="'Pending' == todo.status">{{ todo.task }}</li>
        </ul>

        <h1>Done</h1>
        <ul>
            <!-- <template v-for="todo in todos" :key="todo.id">
                <li class="list" :class="'Done' == todo.status? 'line': ''">{{ todo.task }}</li>
            </template>
            <li v-for="todo in todos" :key="todo.id" v-show="'Done' == todo.status">{{ todo.task }}</li> -->

            <template v-for="todo in todos" :key="todo.id">
                <li class="list" :class="{ 'line' : ('Done' == todo.status) }">
                    {{ todo.task }}
                </li>
            </template>
        </ul>

        <h1>Person Data</h1>
        <p v-for="(value,key,index) in persons" :key="index">{{ key +":"+ value }}</p>

    </div>
</template>

<style scoped>
.line{
    text-decoration: line-through;
}
</style>