import { setItem } from '@/helpers/persistaneStorage'
import AuthService from "@/services/auth"
const state = {
    isLoading: false,
    user: null,
    errors: null
}

const mutations = {
    registerStart(state) {
        state.isLoading = true
        state.errors = null
        state.user = null
    },
    registerSuccess(state, user) {
        state.isLoading = false
        state.user = user
    },
    registerFailure(state, error) {
        state.isLoading = false
        state.errors = error.errors
    },

    loginStart(state) {
        state.isLoading = true
        state.errors = null
        state.user = null
    },
    loginSuccess(state, payload) {
        state.isLoading = false
        state.user = payload
    },
    loginFailure(state, payload) {
        state.isLoading = false
        state.errors = payload.errors
    },

}

const actions = {
    register(context, user) {
        return new Promise((resolve, reject) => {
            context.commit('registerStart')
            AuthService.register(user)
                .then(response => {
                    context.commit('registerSuccess', response.data.user)
                    setItem('token', response.data.user.token)
                    resolve(response.data.user)
                })
                .catch(error => {
                    context.commit('registerFailure', error.response.data)
                    reject(error.response.data)
                })
                .finally(() => {
                    // console.log("finally")
                })
        })
    },
    login(context, user) {
        return new Promise((resolve, reject) => {
            context.commit('loginStart')
            AuthService.login(user)
                .then(response => {
                    context.commit('registerSuccess', response.data.user)
                    setItem('token', response.data.user.token)
                    resolve(response.data.user)
                })
                .catch(error => {
                    context.commit('registerFailure', error.response.data)
                    reject(error.response.data)
                })
        })
    },
}

export default {
    state,
    mutations,
    actions,
}