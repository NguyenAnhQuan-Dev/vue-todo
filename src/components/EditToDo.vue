<script setup>
import {reactive} from "vue";
import {useStore} from "vuex";

const store = useStore()

const emit = defineEmits(["cancel"])

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  }
})

const dataToDo = reactive({
  id: props.id,
  name: props.name,
  level: props.level
})

const handleCancel = function () {
  emit("cancel", false)
}

const handleEdit = function () {
  const payload = {
    id: dataToDo.id,
    name: dataToDo.name,
    level: dataToDo.level
  }
  store.dispatch("handleToDo", payload)
  emit("cancel", false)
}
</script>

<template>
  <div class="overlay">
    <div class="form-edit">
      <h1 class="heading">Edit To Do</h1>
      <div class="field">
        <label for="name-to-do">Name</label>
        <input type="text" placeholder="Name to do ..." id="name-to-do" v-model="dataToDo.name"/>
      </div>
      <div class="field">
        <label for="levels">Level</label>
        <select name="levels" id="levels" v-model="dataToDo.level">
          <option value="High" id="high" class="level" selected>High</option>
          <option value="Medium" id="medium" class="level">Medium</option>
          <option value="Low" id="low" class="level">Low</option>
        </select>
      </div>
      <button class="btn-edit" @click="handleEdit">Edit</button>
      <button class="btn-cancel" @click="handleCancel">Cancel</button>
    </div>
  </div>
</template>

<style scoped lang="css">
.overlay {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay .form-edit {
  background: #ffff;
  width: 500px;
  height: 300px;
  border-radius: 10px;
  padding: 20px;
}

.overlay .form-edit .heading {
  text-align: center;
}

.overlay .form-edit .field {
  display: flex;
  margin-bottom: 20px;
  height: 30px;
  align-items: center;
}

.overlay .form-edit .field label{
  width: 70px;
}

.overlay .form-edit .field input {
  flex: 1;
  height: 100%;
  padding: 0 10px;
}

.overlay .form-edit .btn-edit,
.overlay .form-edit .btn-cancel {
  width: 70px;
  height: 30px;
  border: none;
  outline: none;
  background: #42b883;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-right: 20px;
}
</style>