<template>
  <div class="container">
    <nav class="nav">
      <ul>
        <li><button><span class="login">로그인</span></button></li>
      </ul>
    </nav>
    
    <section class="contents">
      <div class="contents-top">
        <div
          :class="{active: $articles.ord === 'asc', default: $articles.ord !== 'asc'}"
          @click="setArticlesOrder('asc')"
        ><div class="circle"
          :class="{circle: $articles.ord === 'asc', 'circle-d': $articles.ord !== 'asc'}"
        ></div>오름차순</div>
        <div 
          :class="{active: $articles.ord === 'desc', default: $articles.ord !== 'desc'}"
          @click="setArticlesOrder('desc')"
        ><div class="circle-d"
          :class="{circle: $articles.ord === 'desc', 'circle-d': $articles.ord !== 'desc'}"
        ></div>내림차순</div>
        <div class="empty"></div>
        <button class="filter" @click="showModal = !showModal"><span class="filter-name">필터</span></button>
      </div>
      <div v-if="categories.length">
        <router-link :to="{name: 'Details', params: {id: article.id}}"
          v-for="(article, index) in articles" :key="index"
        >
          <div class="category">
            <div class="category-name">
              <div class="ct-name">{{_.find(categories, {id: article.category_id}).name}}</div>
              <div class="ct-id">{{_.find(categories, {id: article.category_id}).id}}</div>
            </div>
            <div class="category-used">
              <div class="ct-user">{{article.user_id}}</div>|
              <div class="ct-date">created_at ({{moment(article.created_at).format('YYYY-MM-DD')}})</div>
            </div>
            <div class="category-body">
              <div class="ct-title">{{cutString(50, article.title)}}</div>
              <div class="ct-sub">{{cutString(70, article.contents)}}</div>
            </div>
          </div>
        </router-link>

        <div class="sponsored">
          <div class="sponsored-name">sponsored</div>
          <div class="sponsored-body">
            <div class="sp-img"></div>
            <div class="sp-body">
              <div class="sp-title">Title Title Title Title Title Title Title Title</div>
              <div class="sp-sub">contents contents contents contents contents contents</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Modal v-if="showModal"></Modal>
  </div>
</template>

<script>
import _ from 'lodash'
import moment from 'moment'
import Modal from './Modal.vue'

export default {
  components: {
    Modal
  },
  data () {
    return {
      showModal: false
    }
  },
  computed: {
    articles() {
      console.log(this.$store.state.articles)
      return this.$store.state.articles.articles.data
    },
    categories() {
      console.log(this.$store.state.categories)
      return this.$store.state.categories.categories
    },
    $articles() {
      return this.$store.state.articles
    },
    _() {
      return _
    },
    moment() {
      return moment
    }
  },
  methods: {
    articlesCreate() {
      this.$store.dispatch('articlesCreate')
    },
    cutString(length, str) {
      if (str.length > length) {
        str = str.substring(0, length) + '...'
      }
      return str
    },
    setArticlesOrder(ascDesc) {
      this.$articles.ord = ascDesc
      this.$store.dispatch('articlesRead')
    }
  },
  created() {
      this.$store.dispatch('articlesRead')
      this.$store.dispatch('categoriesRead')
  }
}
</script>