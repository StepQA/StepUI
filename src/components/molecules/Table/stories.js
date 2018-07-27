import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Table } from './index';
import { constants } from '../../core';


const tableStories = storiesOf('Tables', module);


tableStories.add("StandardTable", () => {
    const header = [{
        text: "Title #1"
    }, {
        text: "Title #2"
    }, {
        text: "Title #3"
    }, {
        text: "Title #4"
    }];
    const body = [[
        {
        text: "Text #1"
    }, {
        text: "Text #2"
    }, {
        text: "Text #3"
    }, {
        text: "Text #4"
    }
        ],[
        {
        text: "Text #1"
    }, {
        text: "Text #2"
    }, {
        text: "Text #3"
    }, {
        text: "Text #4"
    }
        ],[
        {
        text: "Text #1"
    }, {
        text: "Text #2"
    }, {
        text: "Text #3"
    }, {
        text: "Text #4"
    }
        ]];


    return <Table header={header} body={body} />
});
