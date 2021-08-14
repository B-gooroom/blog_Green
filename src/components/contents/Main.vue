<template>
  <div class="container">
    <nav class="nav">
      <ul>
        <li><button><span class="login">로그인</span></button></li>
      </ul>
    </nav>
    
    <section class="contents">
      <div class="contents-top">
        <div class="asc"><div class="circle"></div>오름차순</div>
        <div class="desc"><div class="circle-d"></div>내림차순</div>
        <div class="empty"></div>
        <button class="filter"><span class="filter-name">필터</span></button>
      </div>
      <div v-if="categories.length">
        <div class="category" v-for="(article, index) in articles" :key="index">
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
            <div class="ct-sub">{{cutString(130, article.contents)}}</div>
          </div>
        </div>
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
  </div>
</template>

<script>
import _ from 'lodash'
import moment from 'moment'

export default {
  computed: {
    articles() {
      console.log(this.$store.state.articles)
      return this.$store.state.articles.articles.data
    },
    categories() {
      console.log(this.$store.state.categories)
      return this.$store.state.categories.categories
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
    }
  },
  created() {
      this.$store.dispatch('articlesRead')
      this.$store.dispatch('categoriesRead')
  }
}
</script>