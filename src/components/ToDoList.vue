<template>
  <ul class="to-do-list">
    <li class="to-do" v-for="todo in data" :key="todo.id">
      <input type="checkbox" :checked="todo.completed" @change="handleCompleted(todo.id)" />
      <p class="name" >{{todo.name}}</p>
      <p class="level">{{todo.level}}</p>
      <button id="delete" class="btn" @click="handleDelete(todo.id)">Delete</button>
      <button id="edit" class="btn" @click="handleEdit(todo.id)">Edit</button>
    </li>
  </ul>
</template>

<script setup>
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore()

const emit = defineEmits(["edit"])

const data = computed(() => store.getters.getAllToDoByFilter)

const handleCompleted = function (id) {
  store.dispatch("setCompleted", id)
}

const handleDelete = function (id) {
  store.dispatch("setToDoDelete", id)
}

const handleEdit = function (id) {
  const todo = store.getters.getToDoById(id);
  emit("edit", {status: true, payload: todo});
}
</script>
<style lang="css" scoped>
.to-do-list {
  list-style: none;
  flex: 1;
}
.to-do-list .to-do {
  display: flex;
  gap: 10px;
  align-items: center;
}

.to-do-list .to-do .name {
  flex: 1;
  overflow: hidden;
}

.to-do-list .btn {
  width: 50px;
  cursor: pointer;
}

.to-do-list .to-do input:checked ~ .name {
  text-decoration: line-through;
}
</style>
