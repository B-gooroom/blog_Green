import Vue from 'vue'
import Vuex from 'vuex'
import { moduleArticles } from './moduleArticles'
import { moduleCategories } from './moduleCategories'
import { moduleAds } from './moduleAds'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    articles: moduleArticles,
    categories: moduleCategories,
    ads: moduleAds
  }
})
