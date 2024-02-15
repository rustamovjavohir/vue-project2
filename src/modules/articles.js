import ArticleService from "@/services/articles"
import axios from "axios"

const state = {
    data: null,
    isLoading: true,
    isLoadingDelete: false,
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

    createArticleStart(state) {
        state.isLoading = true
    },
    createArticleSuccess(state, payload) {
        state.isLoading = false

    },
    createArticleFailure(state, error) {
        state.isLoading = false
    },

    deleteArticleStart(state) {
        state.isLoadingDelete = true
    },
    deleteArticleSuccess(state) {
        state.isLoadingDelete = false

    },
    deleteArticleFailure(state) {
        state.isLoadingDelete = false
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

    createArticle(context, article) {
        return new Promise((resolve, reject) => {
            context.commit('createArticleStart')
            ArticleService.createArticle(article)
                .then(response => {
                    context.commit('createArticleSuccess')
                })
                .catch(reject => {
                    context.commit('createArticleFailure')
                })
        })
    },

    deleteArticle(context, slug) {
        return new Promise((resolve) => {
            context.commit('deleteArticleStart')
            ArticleService.deleteArticle(slug)
                .then((response) => {
                    context.commit('deleteArticleSuccess')
                    resolve()
                })
                .catch(() => {
                    context.commit('deleteArticleFailure')
                })
        })
    }
}

export default {
    state,
    mutations,
    actions,
}