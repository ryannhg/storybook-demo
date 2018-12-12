<template>
  <button class="card" @click="$emit('click', $event)">
    <h4 class="card__title" v-text="title"></h4>
    <p class="card__subtitle" v-text="subtitle"></p>
  </button>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String
  }
}
</script>

<style lang="scss" scoped>
  $colors__background: #fff;
  $colors__border: #eee;
  $colors__text: #333;
  $colors__shadow: rgba(0, 0, 0, 0.10);
  .card {
    padding: 1.5rem;
    background-color: $colors__background;
    border: solid 1px $colors__border;
    border-radius: 4px;
    box-shadow: 0 4px 8px $colors__shadow;
    font-size: 2rem;
    font-family: sans-serif;
    color: $colors__text;
    text-align: left;
    &__title {
      margin: 0;
      font-size: 1em;
      font-weight: bold;
    }
    &__subtitle {
      margin: 0;
      margin-top: 0.5em;
      font-size: 0.5em;
      opacity: 0.75;
    }
  }
</style>


