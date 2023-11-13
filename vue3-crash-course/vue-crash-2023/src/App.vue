<template>
  <div class="container">
    <Header title='Task Tracker' />
    <TaskList 
      :taskList = tasks 
      @delete-task="deleteTask"
      @toggle-reminder="toggleReminder" 
      />
    <AddTask />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import TaskList from './components/TaskList.vue'
import AddTask from './components/AddTask.vue'


export default {
  name: 'App',
  components: {
    Header,
    TaskList,
    AddTask
  },
  data() {
    return {
      tasks: []
    }
  },
  created() {
    this.tasks = [
      {
        id: 1,
        name: "task1",
        deadLine: '22-Dec-2023 11.00 am',
        reminder: true
      },
      {
        id: 2,
        name: "task2",
        deadLine: '22-Dec-2023 11.00 am',
        reminder: true
      },
      {
        id: 3,
        name: "task3",
        deadLine: '22-Dec-2023 11.00 am',
        reminder: false
      }
    ]
  },
  methods: {
        deleteTask(id) {
          const index = this.tasks.findIndex(task => task.id === id)
          this.tasks.splice(index,1)
        },
        toggleReminder(id) {
          const task = this.tasks.find(t => t.id === id)
          task.reminder = !task.reminder
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
