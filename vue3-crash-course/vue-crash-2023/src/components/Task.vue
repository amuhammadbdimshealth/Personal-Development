<template>
    <div class="task" :class="{ reminder: task.reminder }">
        <i class="fa-solid fa-xmark close-mark"></i>
        <h3 :style="{ backgroundColor: 'gray', color: 'white' }">
            {{ task.name }}
        </h3>
        <p :style="{ backgroundColor: 'red', color: 'white' }">
            {{ task.deadLine }}
        </p>
    </div>
</template>

<script>
export default {
    name: "Task",
    props: {
        task: Object
    }
}
</script>

<style scoped>
.task {
    padding: 20px;
    border: 1px solid;
    margin-bottom: 4px;
}

.close-mark {
    color: white;
    float: right;
    padding: 5px;
}

.close-mark:hover,
close-mark:focus {
    color: red;
    cursor: pointer;
}

.reminder {
    border-left: 5px solid green;
}
</style>