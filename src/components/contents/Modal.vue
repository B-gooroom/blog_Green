<template>
  <div class="modal-background">
      <form class="modal" @submit="$event.stopPropagation()">
        <h3 class="modal-header">필터</h3>
        <button class="button-close" @click="$parent.showModal = false"><span class="modal-close">X</span></button>
        <div class="modal-body">
          <div class="check">
            <input type="checkbox" id="cb1" v-model="selectedCategories.apple">
            <label for="cb1"><span>apple</span></label>
          </div>
          <div class="check">
            <input type="checkbox" id="cb2" v-model="selectedCategories.banana">
            <label for="cb2"><span>banana</span></label>
          </div>
          <div class="check">
            <input type="checkbox" id="cb3" v-model="selectedCategories.coconut">
            <label for="cb3"><span>coconut</span></label>
          </div>
        </div>
        <div class="modal-footer">
          <button class="button-update" @click="filterSave()"><span class="modal-update">저장하기</span></button>
        </div>
      </form>
  </div>
</template>

<script>

export default {
  computed: {
    selectedCategories() {
      console.log(this.$store.state.categories.selectedCategories)
      return this.$store.state.categories.selectedCategories
    }
  },
  methods: {
    filterSave() {
      this.$parent.showModal = false
      this.$store.dispatch('articlesRead')
    }
  }
}
</script>