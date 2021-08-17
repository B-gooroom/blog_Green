import axios from 'axios'
import { moduleCategories } from './moduleCategories'

export const moduleArticles = {
  state: {
    articles: {
      data: []
    },
    article: {
      reply: []
    }
  },
  mutations: {
    articlesRead(state, articles) {
      state.articles = articles
    },
    articleRead(state, article) {
      state.article = article
    }
  },
  actions: {
    articlesRead(thisStore) {
      let categoriesChecked = ''
      categoriesChecked += moduleCategories.state.selectedCategories.apple ? '&category[]=1' : ''
      categoriesChecked += moduleCategories.state.selectedCategories.banana ? '&category[]=2' : ''
      categoriesChecked += moduleCategories.state.selectedCategories.coconut ? '&category[]=3' : ''
      axios.get(`https://problem.comento.kr/api/list?page=1&ord=asc&limit=10${categoriesChecked}`).then(function (response) {
        console.log('Done articlesRead', response)
        thisStore.commit('articlesRead', response.data)
      }).catch(function (error) {
        thisStore.dispatch('axiosError', error)
      })
    },
    articleRead(thisStore, id) {
      axios.get(`https://problem.comento.kr/api/view?id=${id}`).then(function (response) {
        console.log('Done articleRead', response)
        thisStore.commit('articleRead', response.data.data)
      }).catch(function (error) {
        thisStore.dispatch('axiosError', error)
      })
    }
  }
}
