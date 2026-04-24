<template>
    <div :key="task.id" v-for="task in taskList">
        <Task 
            :task=task
            @delete-task="deleteTask"
            @dblclick="$emit('toggle-reminder', task.id)" 
            />
    </div>
</template>

<script>
import Task from './Task.vue'

export default {
    name: 'TaskList',
    props: {
        taskList: Array
    },
    components: {
        Task
    },
    emits: ['delete-task', 'toggle-reminder'], 
    methods: {
        deleteTask(id) {
            // console.log('taskList', id);
            this.$emit('delete-task', id);
        }
    }
}
</script>

<style></style> 