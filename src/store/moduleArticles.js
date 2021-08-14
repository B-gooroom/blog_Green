import axios from 'axios'

export const moduleArticles = {
  state: {
    articles: {
      data: []
    },
    article: {
    }
  },
  mutations: {
    articlesRead(state, articles) {
      state.articles = articles
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
    }
  }
}
