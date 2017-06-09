import { configure } from '@storybook/react'

function loadStories() {
<<<<<<< HEAD
  require('../stories/index.js')
  // You can require as many stories as you need.
=======
  require('../stories')
>>>>>>> refactor(storybook): Update to  3.0
}

configure(loadStories, module)