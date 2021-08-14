import axios from 'axios'

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
      // const category = JSON.stringify([0, 1, 2])
      axios.get(`https://problem.comento.kr/api/list?page=1&ord=asc&limit=10&category[]=1&category[]=2&category[]=3`).then(function (response) {
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
