<template>
  <div class="todo-input">
    <input v-model="newTask" @keyup.enter="submitTask" placeholder="Enter a new task" maxlength="150" />
    <button @click="submitTask">Add Task</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: ''
    };
  },
  methods: {
    submitTask() {
      if (this.newTask.trim()) {
        this.$emit('add-task', this.newTask.trim());
        this.newTask = '';
      }
    }
  }
};
</script>

<style scoped>
.todo-input {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

input {
  padding: 10px;
  font-size: 16px;
  width: 70%;
  margin-right: 10px;
}

button {
  padding: 10px 15px;
  font-size: 16px;
}
</style>
