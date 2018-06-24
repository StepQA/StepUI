import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';
import { constants } from '../../core';

const buttonStories = storiesOf('Buttons', module);


constants.types.forEach(type => buttonStories.add(type,
  () => (<Button onClick={action(`clicked ${type} button`)} type={type}>{type.charAt(0).toUpperCase() + type.slice(1)} button</Button>)
));
