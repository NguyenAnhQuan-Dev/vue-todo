<script setup>
import AddToDo from "./components/AddToDo.vue";
import ToDoList from "./components/ToDoList.vue";
import SearchToDo from "./components/SearchToDo.vue";
import EditToDo from "./components/EditToDo.vue";
import {reactive, ref} from "vue";

const isEdit = ref(false);
const todo = reactive({
  name: "",
  level: "",
})

const handleEdit = function ({status, payload}) {
  isEdit.value = status;
  const {name, level, id} = payload;
  todo.name = name;
  todo.level = level;
  todo.id = id
}

const handleCancel = function (status) {
  isEdit.value = status;
}
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <h1 class="heading">Vue To Do</h1>
      <AddToDo />
      <ToDoList @edit="handleEdit"/>
      <SearchToDo />
    </div>
    <EditToDo v-if="isEdit" @cancel="handleCancel" :name="todo.name" :level="todo.level" :id="todo.id"/>
  </div>
</template>

<style scoped lang="css">
.wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
}

.container {
  width: 500px;
  height: 700px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.heading {
  text-align: center;
}
</style>
