import { configure } from '@storybook/react';

function loadStories() {
  require('../atoms/Button/stories.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);