import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../atoms/Button/Button';
import { colors } from '../core';

const defaultDivStyle = {
    height:"100px",
    width:"100px"
};
storiesOf('Style', module)
  .add('Primary', () => (
      <div style={Object.assign({}, defaultDivStyle, {
          background:colors.primaryBg
      })}></div>
  ))
  .add('with emojis', () => (
    <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));   