<template>
  <div class="add-to-do">
    <input type="text" placeholder="Name to do ..." v-model="dataToDo.name" />
    <select name="levels" id="levels" v-model="dataToDo.level">
      <option value="High" id="high" class="level" selected>High</option>
      <option value="Medium" id="medium" class="level">Medium</option>
      <option value="Low" id="low" class="level">Low</option>
    </select>
    <button class="btn-add" @click="handelAdd">Add</button>
  </div>
</template>

<script setup>
import {reactive} from "vue";
import {useStore} from "vuex";
import {v4 as uuidV4} from "uuid"

const store = useStore()
const dataToDo = reactive({
  name: "",
  level: "Low",
  completed: false
})

const handelAdd = function () {
  store.dispatch("addToDo", {id: uuidV4(),name: dataToDo.name, level: dataToDo.level, completed: dataToDo.completed})
}
</script>

<style lang="css" scoped>
.add-to-do {
  width: 100%;
  height: 30px;
  display: flex;
  gap: 5px;
  margin: 20px 0;
}

.add-to-do input {
  height: 100%;
  flex: 1;
  padding: 0 10px;
}

.add-to-do #levels {
  width: 70px;
  height: 100%;
  cursor: pointer;
}

.add-to-do #levels .level {
  width: 100%;
  height: 40px;
  cursor: pointer;
}

.add-to-do .btn-add {
  width: 60px;
  height: 100%;
  background-color: #42b883;
  color: #fff;
  cursor: pointer;
  border: none;
  outline: none;
}
</style>
