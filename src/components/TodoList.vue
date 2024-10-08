<template>
  <div class="todo-list" @click="cancelEdit">
    <ul>
      <li v-for="task in tasks" :key="task.id" @click.stop>
        <input type="checkbox" :checked="task.completed" @change="$emit('toggle-task', task.id)" />

        <span v-if="!task.editing" :class="{ completed: task.completed }" @dblclick="editMode(task)">
          {{ task.text }}
        </span>

        <input v-else v-model="task.editingText" @blur="saveEdit(task)" @keyup.enter="saveEdit(task)" class="edit-input"
          :style="{ width: `${task.text.length + 1}ch` }" maxlength="150" ref="editableInput" />

        <div class="button-group">
          <button v-if="!task.editing" @click="editMode(task)" class="btn edit-btn">Edit</button>
          <button v-if="task.editing" @click="saveEdit(task)" class="btn save-btn">Save</button>
          <button @click="$emit('remove-task', task.id)" class="btn delete-btn">Del</button>
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
      this.tasks.forEach(t => {
        if (t !== task) {
          t.editing = false;
        }
      });

      task.editing = true;
      task.editingText = task.text;

      this.$nextTick(() => {
        const editableInput = this.$refs.editableInput;
        if (editableInput && editableInput.length) {
          editableInput[0].focus();
        } else {
          editableInput?.focus();
        }
      });
    },
    saveEdit(task) {
      if (task.editingText.trim()) {
        this.$emit('edit-task', task.id, task.editingText.trim());
      }
      task.editing = false;
    },
    cancelEdit() {
      this.tasks.forEach(task => {
        if (task.editing) {
          task.editing = false;
        }
      });

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
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.todo-list span {
  word-wrap: break-word;
  white-space: normal;
  max-width: 70%;
  font-size: 16px;
}

.todo-list input[type="checkbox"] {
  margin-right: 10px;
}

.completed {
  text-decoration: line-through;
}

.edit-input {
  font-size: 16px;
  border: none;
  outline: none;
  background: transparent;
  padding: 0;
  margin: 0;
  max-width: 100%;
  color: #000;
  font-family: inherit;
}

.button-group {
  display: flex;
  align-items: center;
}

.btn {
  font-size: 14px;
  padding: 5px 10px;
  margin-left: 5px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  background-color: #e0e0e0;
}

.btn:hover {
  background-color: #c0c0c0;
}

.edit-btn {
  background-color: #90caf9;
}

.delete-btn {
  background-color: #ef5350;
  color: white;
}

.delete-btn:hover {
  background-color: #e53935;
}

.save-btn {
  background-color: #66bb6a;
  color: white;
}

.save-btn:hover {
  background-color: #43a047;
}
</style>
