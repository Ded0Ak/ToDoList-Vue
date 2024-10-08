<template>
  <div class="todo-app">
    <h1>ToDo List</h1>
    <TodoInput @add-task="addTask" />
    <TodoList :tasks="tasks" @remove-task="removeTask" @toggle-task="toggleTask" @edit-task="editTask" />
  </div>
</template>

<script>
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    TodoInput,
    TodoList
  },
  data() {
    return {
      tasks: []
    };
  },
  mounted() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  },
  watch: {
    tasks: {
      handler(newTasks) {
        localStorage.setItem('tasks', JSON.stringify(newTasks));
      },
      deep: true
    }
  },
  methods: {
    addTask(task) {
      this.tasks.push({ id: Date.now(), text: task, completed: false });
    },
    removeTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    },
    toggleTask(id) {
      const task = this.tasks.find(task => task.id === id);
      if (task) task.completed = !task.completed;
    },
    editTask(id, newText) {
      const task = this.tasks.find(task => task.id === id);
      if (task) task.text = newText;
    }
  }
};
</script>

<style scoped>
.todo-app {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 10px;
  background: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
}
</style>
