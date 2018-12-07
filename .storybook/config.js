import { configure } from '@storybook/vue'

import Vue from 'vue'

// Import your custom components.
import MyButton from '../src/stories/MyButton.vue'

// Register custom components.
Vue.component('my-button', MyButton)

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories')
}

configure(loadStories, module)
