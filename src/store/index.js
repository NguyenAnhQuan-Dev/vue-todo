import {createStore} from "vuex"

const store = createStore({
    state: {
        data: [],
        searchData:{
            name: "",
            level: "",
        }
    },
    actions: {
        addToDo ({commit}, payload) {
            commit("updateDataToDo", payload)
        },

        setCompleted ({commit}, payload) {
            commit("updateCompleted", payload)
        },
        setSearchValue ({commit}, payload) {
            commit("updateSearch", payload)
        },
        setToDoDelete ({commit}, payload) {
            commit("deleteToDo", payload)
        },
        handleToDo({commit}, payload) {
            commit("updateToDo", payload)
        }
    },
    mutations: {
        updateDataToDo (state, payload) {
            state.data.push(payload)
        },
        updateCompleted (state, payload) {
            const todo = state.data.find(todo => todo.id === payload);
            todo.completed = !todo.completed
        },
        updateSearch (state, payload) {
            state.searchData = payload
        },
        deleteToDo(state, payload) {
            state.data = state.data.filter(todo => todo.id !== payload)
        },
        updateToDo(state, payload) {
            const todo = state.data.find(todo => todo.id === payload.id);
            console.log("TO DO:: ",todo)
            todo.name = payload.name
            todo.level = payload.level
        }
    },
    getters: {
        getAllToDo (state) {
            return state.data;
        },
        getAllToDoByFilter (state) {
            const { name, level } = state.searchData;
            if (name === "" && level === "") {
                return state.data;
            }
            let filteredTodos = state.data;
            if (name !== "" && level !== "") {
                filteredTodos = filteredTodos.filter(todo => todo.name.toLowerCase().includes(name) && todo.level === level);
            }
            if (level !== "") {
                filteredTodos = filteredTodos.filter(todo => todo.level === level);
            }
            if (name !== "") {
                filteredTodos = filteredTodos.filter(todo => todo.name.toLowerCase().includes(name));
            }
            // Assuming level filtering needs to be implemented

            return filteredTodos;
        },
        getToDoById: (state) => (id) => {
            return state.data.find(todo => todo.id === id);
        },
    }
})

export default store
