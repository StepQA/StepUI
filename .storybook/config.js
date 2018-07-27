import { configure } from '@storybook/react';
import jestTestResults from '../.jest-test-results.json';

function loadStories() {
  require('../components/atoms/Button/stories.js');
  
  
  require('../components/molecules/Table/stories.js');

}

configure(loadStories, module);
