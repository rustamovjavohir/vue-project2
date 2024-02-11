import ArticleService from "@/services/articles"
import axios from "axios"

const state = {
    data: null,
    isLoading: true,
    error: null
}

const mutations = {
    getArticlesStart(state) {
        state.isLoading = true
        state.data = null
        state.error = null
    },
    getArticlesSuccess(state, payload) {
        state.data = payload.articles
        state.isLoading = false
    },
    getArticlesFaliure(state) {
        state.isLoading = false
    },

}

const actions = {
    articles(context) {
        return new Promise((resolve, reject) => {
            context.commit('getArticlesStart')
            ArticleService.articles()
                .then(response => {
                    context.commit('getArticlesSuccess', response.data)
                    console.log("RESPONSE", response.data)
                })
                .catch(error => {
                    context.commit('getArticlesFaliure')
                    console.log("ERROR", error)
                })
        })
    },
}

export default {
    state,
    mutations,
    actions,
}