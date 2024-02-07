import { setItem } from '@/helpers/persistaneStorage'
import AuthService from "@/services/auth"
import { gettersTypes } from '@/modules/types'
const state = {
    isLoading: false,
    user: null,
    errors: null,
    isLoggedIn: null
}

const getters = {
    [gettersTypes.currentUser]: state => {
        return state.user
    },
    [gettersTypes.isLoggenIn]: state => {
        return state.isLoggedIn
    },
    [gettersTypes.isAnonymous]: state => {
        return state.isLoggedIn == false
    },
}

const mutations = {
    registerStart(state) {
        state.isLoading = true
        state.errors = null
        state.user = null
        state.isLoggedIn = null
    },
    registerSuccess(state, user) {
        state.isLoading = false
        state.user = user
        state.isLoggedIn = true
    },
    registerFailure(state, error) {
        state.isLoading = false
        state.errors = error.errors
        state.isLoggedIn = false
    },

    loginStart(state) {
        state.isLoading = true
        state.errors = null
        state.user = null
        state.isLoggedIn = null
    },
    loginSuccess(state, payload) {
        state.isLoading = false
        state.user = payload
        state.isLoggedIn = true
    },
    loginFailure(state, payload) {
        state.isLoading = false
        state.errors = payload.errors
        state.isLoggedIn = false
    },
    currentUserStart(state) {
        state.isLoading = true
    },
    currentUserSuccess(state, payload) {
        state.isLoading = false
        state.user = payload
        state.isLoggedIn = true
    },
    currentUserFailure(state) {
        state.isLoading = false
        state.user = null
        state.isLoggedIn = false
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
    getUser(context) {
        return new Promise((resolve) => {
            context.commit('currentUserStart')
            AuthService.getUser()
                .then(response => {
                    context.commit('currentUserSuccess', response.data.user)
                    resolve(response.data.user)
                })
                .catch(() => {
                    context.commit('currentUserFailure')
                })
        })
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
}