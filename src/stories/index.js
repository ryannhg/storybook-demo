import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

storiesOf('MyButton', module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .add('Simple example', () =>
    '<my-button @click="">Hello</my-button>'
  )
  .add('With actions', () => ({
    template: '<my-button @click="click">Hello</my-button>',
    methods: {
      click: action('click')
    }
  }))
  .add('With knobs', () => {
    return {
      template: `<my-button :label="label">Hello</my-button>`
    }
  })
  .add('With slots + knobs', () => {
    const props = {
      label: text('Label', 'Hello')
    }
    return {
      render: h => {
        return h(`my-button`, text('Label', 'Hello'))
      },
      props: {
        label: {
          type: String,
          default: props.label
        }
      },
      watch: {
        label () {
          this.$forceUpdate()
        }
      }
    }
  })
