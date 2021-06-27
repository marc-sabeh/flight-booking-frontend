import axios from 'axios';

   export const state = () => ({
        flights_city: null,
        flight: [],
        order:[]
    })
    export const getters = {
        flights_city(state){
            return state.flights_city
        },
        flight(state){
            return state.flight
        },
        order(state){
            return state.order
        }
    }
    export const mutations = {
        SET_FLIGHTS_CITIES (state, data) {
            state.flights_city =data  
        },
        SET_FLIGHT (state, data){
            state.flight =data;
        },
        SET_ORDER(state, data){
            state.order = data;
        }
    }
    export const actions = {
        async getFlightsCities({ commit },values) {
            await axios.get(`http://localhost:1337/flights?_where[city_to]=${values[3]}&_limit=${values[0]}&_start=${values[1]}&_q=${values[2]}`)
                .then(response => {
                commit('SET_FLIGHTS_CITIES', response.data)
                console.log(response.data)
                }).catch(error => {
                    console.log("Error login")
                    console.log(error)
                commit('SET_FLIGHTS_CITIES', null)
                })
        },

        async getFlight({ commit },value) {
            await axios.get(`http://localhost:1337/flights/${value[0]}`)
                .then(response => {
                commit('SET_FLIGHT', response.data)
                // console.log('he;oo')
                // console.log(response.data)
                }).catch(error => {
                    console.log("Error login")
                    console.log(error)
                commit('SET_FLIGHT', null)
                })
        },

        async orderFlight({ commit }, data) {
            const token = sessionStorage.getItem('jwt')
            let header = {
              headers: {
                Authorization: 'Bearer ' + token, //the token is a variable which holds the token
              },
            }
            await axios
              .post('http://localhost:1337/orders', data, header)
              .then((response) => {
                commit('SET_ORDER', response.data)
              })
              .catch((error) => {
                console.log('Error')
                console.log(error)
                commit('SET_ORDER', null)
              })
          },
    }