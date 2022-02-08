import React, { Component } from 'react';
import classes from './current-movie.module.css';

export class CurrentMovie extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        console.log(this.props);
        return (
            <div className={classes.root}>
                <div className={classes.poster}>
                    <img
                        className={classes.img}
                        src={this.props.movie.imgUrl}
                        alt={this.props.movie.name}
                    />
                </div>
                <h1>{this.props.movie.name}</h1>
                <p>{this.props.movie.description}</p>
            </div>
        );
    }
}
