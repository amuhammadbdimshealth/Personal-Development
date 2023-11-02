<template>
    <div :key="task.id" v-for="task in taskList">
        <Task :task=task />
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
    }
}
</script>

<style></style>