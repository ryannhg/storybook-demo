<template>
  <div class="card">
    <div class="card__header">
      <img class="card__avatar" v-if="avatar && avatar.src" :src="avatar.src" :alt="avatar.alt">
      <div class="card__header-content">
        <h4 class="card__title" v-text="header.name"></h4>
        <p class="card__subtitle" v-text="header.title"></p>
      </div>
    </div>
    <rich-text class="card__content" v-html="intro"/>
    <div class="card__buttons button__row">
      <a class="button" :href="cta.url" v-text="cta.label"></a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: Object,
    header: Object,
    intro: String,
    cta: Object
  },
  computed: {
    topStyles() {
      return {
        'background-image': this.background && `url('${this.background}')`
      };
    }
  }
};
</script>
