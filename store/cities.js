import axios from 'axios';

   export const state = () => ({
        cities: null,
    })
    export const getters = {
        cities(state){
            return state.cities
        },
    }
    export const mutations = {
        SET_CITIES (state, data) {
            state.cities =data  
        },
    }
    export const actions = {
        async getCities({ commit },values) {
            await axios.get(`http://localhost:1337/cities?_limit=${values[0]}&_start=${values[1]}&_q=${values[2]}`)
                .then(response => {
                commit('SET_CITIES', response.data)
                console.log(response.data)
                }).catch(error => {
                    console.log("Error login")
                    console.log(error)
                commit('SET_CITIES', null)
                })
        },
    }