import { configure } from '@storybook/react';
import jestTestResults from '../.jest-test-results.json';

function loadStories() {
  require('../src/components/atoms/Button/stories.js');
  require('../src/components/atoms/Grid/stories.js');

  require('../src/components/molecules/Table/stories.js');

}

configure(loadStories, module);
