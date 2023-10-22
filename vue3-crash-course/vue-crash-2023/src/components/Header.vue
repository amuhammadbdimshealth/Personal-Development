<template>
    <header>
        <h1>{{ title }}</h1> 
        <Button color="green" text="Add Task"/>
    </header>
</template>

<script>
import Button from './Button.vue'
export default {
    name: "Header",
    // props:  ['title']
    props: {
        title: String
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