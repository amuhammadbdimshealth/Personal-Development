<template>
  <h1>Task Manager</h1>
  <p>
    {{taskName}}
    {{deadlineDate}}
    {{reminder}}
  </p>

  <form id="add-task-form">
    <div>
      <label for="taskName">Task Name:</label>
      <input v-model="taskName" type="text" id="taskName" name="taskName" required>
    </div>

    <div>
      <label for="deadlineDate">Deadline:</label>
      <input v-model="deadlineDate" type="datetime-local" id="deadlineDate" name="deadline">
    </div>

    <div>
      <label for="reminder">Set Reminder:</label>
      <input v-model="reminder" type="checkbox" id="reminder" name="reminder">
    </div>

    <button 
      type="submit"
      @click="saveTask"
    >
      Save task
    </button>
  </form>
</template>

<script>
export default {
  name: 'AddTask',
  emits: ['save-task'],
  data() {
    return {
      taskName: '',
      deadlineDate: '',
      reminder: false
    }
  },
  methods: {
    saveTask(event) {
      event.preventDefault();
      const task = {
        id: Math.ceil(Math.random() * 1000),
        name: this.taskName,
        deadLine: this.deadlineDate,
        reminder: this.reminder
      }
      this.$emit('save-task', task);
    }
  }
};
</script>

<style scoped>
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
  }

  #add-task-form {
    max-width: 400px;
    margin: 20px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  div {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  input[type='checkbox'] {
    width: inherit;    
  }

  button {
    width: 100%;
    background-color: #1b1c1b;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  button:hover {
    background-color: #45a049;
  }
</style>