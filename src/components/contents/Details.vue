<template>
<section class="container-2">
  <div class="contents-2">
      <div class="details">
        <div class="dt-title">{{cutString(100, article.title)}}</div>
        <div class="dt-sub">{{cutString(300, article.contents)}}</div>
        <div class="dt-user">created_at ({{moment(article.created_at).format('YYYY-MM-DD')}})</div>
      </div> 
    <div class="reply">
    <div class="reply-count">답변</div>
    <div class="reply-counter">{{article.reply.length}}</div>
      <div class="reply-block" v-for="(reply, index) in article.reply" :key="index">
        <div class="rp-user">{{reply.user.name}}</div>
        <div class="rp-line"></div>
        <div class="rp-sub">{{reply.contents}}</div>
        <div class="rp-date">created_at ({{moment(reply.created_at).format('YYYY-MM-DD')}})</div>
      </div>
    </div>
  </div>

</section>
</template>

<script>
import _ from 'lodash'
import moment from 'moment'

export default {
  computed: {
    article() {
      console.log(this.$store.state.article)
      return this.$store.state.articles.article
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
    cutString(length, str = '') {
      if (str.length > length) {
        str = str.substring(0, length) + '...'
      }
      return str
    }
  },
  created() {
    this.$store.dispatch('articleRead', this.$route.params.id)
  }
}
</script>