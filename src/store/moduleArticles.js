import axios from 'axios'
import { moduleCategories } from './moduleCategories'

export const moduleArticles = {
  state: {
    articles: {
      data: []
    },
    article: {
      reply: []
    },
    ord: 'asc',
    promise: []
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
      thisStore.state.promise[1] = new Promise(function (resolve, reject) {
        let categoriesChecked = ''
        categoriesChecked += moduleCategories.state.selectedCategories.apple ? '&category[]=1' : ''
        categoriesChecked += moduleCategories.state.selectedCategories.banana ? '&category[]=2' : ''
        categoriesChecked += moduleCategories.state.selectedCategories.coconut ? '&category[]=3' : ''
        axios.get(`https://problem.comento.kr/api/list?page=1&ord=${thisStore.state.ord}&limit=10${categoriesChecked}`).then(function (response) {
          console.log('Done articlesRead', response)
          resolve(response.data)
        }).catch(function (error) {
          thisStore.dispatch('axiosError', error)
          reject(error)
        })
      })
      Promise.all(thisStore.state.promise).then(function (result) {
        thisStore.commit('articlesRead', result[1])
      }).catch(function (error) {
        console.error(error);
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
