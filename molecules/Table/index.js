import React from 'react';
import PropTypes from 'prop-types';


class Table extends React.Component {

    _renderBody() {
        return this.props.body.map(row => 
            <tr>
                {row.map(thisRow => <td>{thisRow.text}</td>)}
            </tr>)
    }
    _renderHeader() {
        return this.props.header.map(column => <th>{column.text}</th>);
    }
    render() {
        return <table>
                    <thead>
                        <tr>
                            {this._renderHeader()}
                        </tr>
                    </thead>
                    <tbody>
                        {this._renderBody()}
                    </tbody>
                </table>
    }
}

Table.propTypes = {
    body: PropTypes.arrayOf(Array).isRequired,
    header: PropTypes.arrayOf(Object).isRequired
};

export { 
  Table  
};