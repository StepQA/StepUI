import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { colors } from '../../core';
import { Grid, Cell } from './';



const gridStories = storiesOf('Grid', module)

const maxCount = 12; 

for(let i = 1; i <= maxCount; i++) {
    gridStories.add(`Grid with cell sizes ${i}`, 
    ()=>{
        const cellSize  = maxCount / i; 
        const cells = [];
        for(let j = 0; j < i; j++){
            cells.push(<Cell width={Math.floor(cellSize)}><div style={{height:"100px", background:"blue"}}></div></Cell>);
        }
        return (
            <Grid>
                {cells}
            </Grid>
        );
    })
}