import axios from 'axios'

export const state = () => ({
  token: null,
  user: null,
})
export const getters = {
  authenticated(state) {
    return state.token && state.user
  },

  user(state) {
    return state.user
  },
}
export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_USER(state, data) {
    state.user = data
  },
}
export const actions = {
  async signIn({ dispatch }, credentials) {
    await axios
      .post('http://localhost:1337/auth/local', credentials)
      .then((response) => {
        sessionStorage.setItem('jwt', response.data.jwt)
        return dispatch('attempt', response.data.jwt)
      })
      .catch((error) => {
        console.log('Error login')
        console.log(error)
      })
  },

  async register({ dispatch }, form) {
    await axios
      .post('http://localhost:1337/auth/local/register', form)
      .then((response) => {
        sessionStorage.setItem('jwt', response.data.jwt)
        return dispatch('attempt', response.data.jwt)
      })
      .catch((error) => {
        console.log('Error login')
        console.log(error)
      })
  },

  async attempt({ commit, state }, token) {
    if (token) {
      commit('SET_TOKEN', token)
    }

    if (!state.token) {
      return
    }

    let header = {
      headers: {
        Authorization: 'Bearer ' + token, //the token is a variable which holds the token
      },
    }
    await axios
      .get('http://localhost:1337/users/me', header)
      .then((response) => {
        commit('SET_USER', response.data)
      })
      .catch((error) => {
        console.log('Error login')
        console.log(error)
        commit('SET_TOKEN', null)
        commit('SET_USER', null)
      })
  },
  logOut({ commit }) {
    sessionStorage.removeItem('jwt')
    commit('SET_TOKEN', null)
    commit('SET_USER', null)
  },
}
