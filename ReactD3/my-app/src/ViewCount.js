import React, { Component } from 'react';

export default class ViewCount extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>{this.props.count}</div>
        )
    }
}