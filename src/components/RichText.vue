<template>
  <div class="rich-text" @click="$emit('click', $event)">
    <slot></slot>
  </div>
</template>

<style lang="scss">
  @import '../assets/styles/main.scss';
</style>
