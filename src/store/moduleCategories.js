import axios from 'axios'

export const moduleCategories = {
  state: {
    categories: [],
    selectedCategories: {
      apple: true,
      banana: true,
      coconut: true
    }
  },
  mutations: {
    categoriesRead(state, categories) {
      state.categories = categories
    }
  },
  actions: {
    categoriesRead(thisStore) {
      axios.get('https://problem.comento.kr/api/category').then(function (response) {
        console.log('Done categoriesRead', response)
        thisStore.commit('categoriesRead', response.data.category)
      }).catch(function (error) {
        thisStore.dispatch('axiosError', error)
      })
    }
  }
}
