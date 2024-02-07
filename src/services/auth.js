import axios from "./axios";

const AuthService = {
    register(user) {
        return axios.post('/users', { user: user })
    },
    login(user) {
        return axios.post('/users/login', { user: user })
    }
}

export default AuthService