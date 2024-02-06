import axios from "./axios";

const AuthService = {
    register(user) {
        return axios.post('/users', { user: user })
    }
}

export default AuthService