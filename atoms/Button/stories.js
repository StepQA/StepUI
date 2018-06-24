import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';
import { constants } from '../../core';

const buttonStories = storiesOf('Buttons', module);


constants.types.forEach(type => buttonStories.add(type.charAt(0).toUpperCase() + type.slice(1),
  () => constants.sizes.map(size =>(
      <div style={{margin:"10px"}}>
            <Button onClick={action(`clicked ${size} ${type} button`)} type={type} size={size}>
                {type.charAt(0).toUpperCase() + type.slice(1)} button
            </Button>
      </div>
      )
)));


constants.types.forEach(type => buttonStories.add(type.charAt(0).toUpperCase() + type.slice(1) + " circular",
  () => constants.sizes.map(size =>(
      <div style={{margin:"10px"}}>
            <Button onClick={action(`clicked ${size} ${type} button`)} type={type} size={size} shape="circle">
                {type.charAt(0).toUpperCase() + type.slice(1)} button
            </Button>
      </div>
      )
)));

constants.types.forEach(type => buttonStories.add(type.charAt(0).toUpperCase() + type.slice(1) + " loading",
  () => constants.sizes.map(size =>(
      <div style={{margin:"10px"}}>
            <Button onClick={action(`clicked ${size} ${type} button`)} type={type} size={size} loading={true}>
                {type.charAt(0).toUpperCase() + type.slice(1)} button
            </Button>
      </div>
      )
)));
