import { configure } from '@storybook/react';
import jestTestResults from '../.jest-test-results.json';

function loadStories() {
  require('../atoms/Button/stories.js');
  
  
  require('../molecules/Table/stories.js');

}

configure(loadStories, module);