<template>
  <div class="todo-list">
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <input 
          type="checkbox" 
          v-model="task.completed" 
          @change="$emit('toggle-task', task.id)" 
        />
        <span 
          :class="{ completed: task.completed }" 
          @dblclick="editMode(task)"
        >
          {{ task.text }}
        </span>
        <button @click="$emit('remove-task', task.id)">Delete</button>
        <div v-if="task.editing">
          <input v-model="task.editingText" @keyup.enter="saveEdit(task)" />
          <button @click="saveEdit(task)">Save</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['tasks'],
  methods: {
    editMode(task) {
      task.editing = true;
      task.editingText = task.text;
    },
    saveEdit(task) {
      if (task.editingText.trim()) {
        this.$emit('edit-task', task.id, task.editingText.trim());
        task.editing = false;
      }
    }
  }
};
</script>

<style scoped>
.todo-list ul {
  list-style: none;
  padding: 0;
}

.todo-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #fff;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
}

.todo-list input[type="checkbox"] {
  margin-right: 10px;
}

.completed {
  text-decoration: line-through;
}

button {
  margin-left: 10px;
}
</style>
