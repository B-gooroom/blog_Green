import axios from 'axios'
import { moduleArticles } from './moduleArticles'

export const moduleAds = {
  state: {
    ads: [],
    ad: {
    }
  },
  mutations: {
    adsRead(state, ads) {
      state.ads = ads
    }
  },
  actions: {
    adsRead(thisStore) {
      moduleArticles.state.promise[0] = new Promise(function (resolve, reject) {
        axios.get('https://problem.comento.kr/api/ads?page=1&limit=10').then(function (response) {
          console.log('Done adsRead', response)
          thisStore.commit('adsRead', response.data.data)
          resolve()
        }).catch(function (error) {
          thisStore.dispatch('axiosError', error)
          reject(error)
        })
      })
    }
  }
}
