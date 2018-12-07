import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import Centered from '@storybook/addon-centered'

// Button
storiesOf('Button', module)
  .addDecorator(Centered)
  .addDecorator(withKnobs)
  .add('Simple', () => {
    return {
      template: `<my-button @click="click">{{content}}</my-button>`,
      data: () => ({
        content: text('Content', 'Click me')
      }),
      methods: {
        click: action('click')
      }
    }
  })

storiesOf('Card', module)
  .addDecorator(Centered)
  .addDecorator(withKnobs)
  .add('Simple', () => {
    return {
      template: `<card :title="title" :subtitle="subtitle" @click="click" />`,
      data: () => ({
        title: text('Title', 'Ryan Haskell-Glatz'),
        subtitle: text('Subtitle', 'Elm Salesman')
      }),
      methods: {
        click: action('click')
      }
    }
  })
