<template>
  <button class="button" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    label: String
  }
}
</script>


<style lang="scss" scoped>
  .button {
    color: red;
  }
</style>
