import ArticleService from "@/services/articles"
import axios from "axios"

const state = {
    data: null,
    isLoading: true,
    error: null,
    article: null,
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
    getArticleDetailStart(state) {
        state.isLoading = true
        state.article = null
        state.error = null
    },
    getArticleDetailSuccess(state, payload) {
        state.isLoading = false
        state.article = payload
    },
    getArticleDetailFaliure(state, payload) {
        state.isLoading = false
        state.article = payload
    },

}

const actions = {
    articles(context) {
        return new Promise((resolve, reject) => {
            context.commit('getArticlesStart')
            ArticleService.articles()
                .then(response => {
                    context.commit('getArticlesSuccess', response.data)
                    // console.log("RESPONSE", response.data)
                })
                .catch(error => {
                    context.commit('getArticlesFaliure')
                    // console.log("ERROR", error)
                })
        })
    },

    articleDetail(context, slug) {
        return new Promise((resolve) => {
            context.commit('getArticleDetailStart')
            ArticleService.articleDetail(slug)
                .then(response => {
                    context.commit('getArticleDetailSuccess', response.data.article)

                })
                .catch(error => {
                    // context.commit('getArticleDetailFaliure',)
                })
        })
    },
}

export default {
    state,
    mutations,
    actions,
}