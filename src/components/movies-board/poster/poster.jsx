import React, { Component } from 'react';
import classes from './poster.module.css';

export class Poster extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className={classes.root}>
                <img
                    className={classes.img}
                    src={this.props.imgUrl}
                    alt={this.props.name}
                />
                <h4>{this.props.name}</h4>
            </div>
        );
    }
}
