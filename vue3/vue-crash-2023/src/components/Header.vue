<template>
    <header>
        <h1>{{ title }}</h1> 
        <Button 
            :color='showAddTaskForm ? "#FF0000" : "#45a049"' 
            :text='showAddTaskForm ? "Close" : "Add Task"'
            @btn-click='$emit("show-add-form")'
        />
    </header>
</template>

<script>
import Button from './Button.vue' 
export default {
    name: "Header",
    // props:  ['title']
    props: {
        title: String,
        showAddTaskForm: Boolean
    },
    components: {
        Button
    }
}
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>