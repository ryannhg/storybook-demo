import { configure } from '@storybook/vue'

import Vue from 'vue'

// Import your custom components.
import MyButton from '../src/stories/MyButton.vue'
import Card from '../src/stories/Card.vue'

// Register custom components.
Vue.component('my-button', MyButton)
Vue.component('card', Card)

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories')
}

configure(loadStories, module)
