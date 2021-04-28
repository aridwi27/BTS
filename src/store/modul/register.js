import axios from 'axios'

const register = {
  namespaced: true,
  state: () => {
    return {
      api: '18.139.50.74:8080'
    }
  },
  mutations: {

  },
  actions: {
    actRegister (context, data) {
      console.log(data)
      axios.post(`${context.rootState.register.api}/register`, data).then((response) => {
        console.log(response)
      }).catch((err) => {
        console.log(err)
      })
    },
    actLogin (context, data) {
      return new Promise((resolve, reject) => {
        axios.post(`${context.rootState.register.api}/login`, data).then((response) => {
          console.log(response)
          resolve(response)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    getList (context) {
      return new Promise((resolve, reject) => {
        axios.post('18.139.50.74:8080/checklist', { headers: { token: context.rootState.auth.token } }).then((response) => {
          console.log(response)
          resolve(response)
        }).catch((err) => {
          reject(err)
        })
      })
    }
  },
  getters: {
  }
}

export default register
