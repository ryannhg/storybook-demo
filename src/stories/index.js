import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, array } from '@storybook/addon-knobs'
import Centered from '@storybook/addon-centered'
import Vue from 'vue'

import RichText from '../components/RichText'

// Components
Vue.component('rich-text', RichText)

// Style Guide
storiesOf('Typography', module)
  .addDecorator(Centered)
  .addDecorator(withKnobs)
  .add('Overview', () => {
    return {
      data: () => ({
        h1: text('Heading One', `Heading 1`),
        h2: text('Heading Two', `Heading 2`),
        h3: text('Heading Three', `Heading 3`),
        h4: text('Heading Four', `Heading 4`),
        h5: text('Heading Five', `Heading 5`),
        h6: text('Heading Six', `Heading 6`),
        paragraph: text('Paragraph', `This is a paragraph tag. Some assert that the purple of an effect becomes a ferny comparison. The literature would have us believe that an unburnt grass is not but a court. We know that their harbor was, in this moment, an untrod carol. Far from the truth, those lions are nothing more than pickles.`),
        list: array('List', [
          'This is an item',
          'This is another item'
        ]),
        blockquote: text('Blockquote', `A volumed planet's fall comes with it the thought that the spryest newsprint is a rugby. A softball is an iran from the right perspective. Those gears are nothing more than freons. Though we assume the latter, authors often misinterpret the alloy as a volumed interactive, when in actuality it feels more like a preserved airbus.`)
      }),
      methods: {
        onClick: action('onClick')
      },
      template: `
        <rich-text @click="onClick" style="padding: 4rem 1.5rem;">
          <h1 v-html="h1"></h1>
          <h2 v-html="h2"></h2>
          <h3 v-html="h3"></h3>
          <h4 v-html="h4"></h4>
          <h5 v-html="h5"></h5>
          <h6 v-html="h6"></h6>
          <p v-text="paragraph"></p>
          <ol>
            <li v-for="item in list" v-html="item"></li>
            <li> Usually, clients will have nested lists.
              <ul>
                <li>So be sure to include a nested example.</li>
                <li>This one has bullets.</li>
                <li>And <a href="#">a link in the middle</a> of it, kinda neat!</li>
              </ul>
            </li>
            <li>Now is our chance to make sure that these bulleted lists wrap correctly too. Having a bad line height in a bulletted list can cause some ugly looking content, dude.</li>
          </ol>
          <blockquote v-html="blockquote"></blockquote>
          <p>
            <img src="https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?cs=srgb&dl=bright-clouds-cold-618833.jpg&fm=jpg" alt="Sample image">
          </p>
        </rich-text>
      `
    }
  })
