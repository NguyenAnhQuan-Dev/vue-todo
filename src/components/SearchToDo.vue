<template>
  <div class="search-to-do">
    <input type="text" placeholder="Search to do ... " v-model="dataSearch.name"/>
    <select name="levels" id="levels" v-model="dataSearch.level">
      <option value="High" id="high" class="level">High</option>
      <option value="Medium" id="medium" class="level">Medium</option>
      <option value="Low" id="low" class="level">Low</option>
    </select>
    <button class="btn-search" @click="handelSearch">Search</button>
  </div>
</template>

<script setup>
import {reactive} from "vue";
import{useStore} from "vuex";


const store = useStore()
const dataSearch = reactive({
  name: "",
  level:"",
})

const handelSearch = function () {
  store.dispatch("setSearchValue", {name: dataSearch.name, level: dataSearch.level})
}

</script>

<style lang="css" scoped>
.search-to-do {
  width: 100%;
  height: 30px;
  display: flex;
  gap: 5px;
  margin: 20px 0;
}

.search-to-do input {
  height: 100%;
  flex: 1;
  padding: 0 10px;
}

.search-to-do #levels {
  width: 70px;
  height: 100%;
  cursor: pointer;
}

.search-to-do #levels .level {
  width: 100%;
  height: 40px;
  cursor: pointer;
}

.search-to-do .btn-search {
  width: 60px;
  height: 100%;
  background-color: #42b883;
  color: #fff;
  cursor: pointer;
  border: none;
  outline: none;
}
</style>
