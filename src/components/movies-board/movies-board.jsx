import React, { Component } from 'react';
import { Poster } from './poster/poster';
import classes from './movies-board.module.css';
import { CurrentMovie } from './current-movie/current-movie';

const harryPotter = {
    name: 'Harry Potter',
    year: 2018,
    imgUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/8d41b798510867.5ede293ddfb3e.png',
    description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem et inventore labore tempore, error eum, beatae cumque laborum nesciunt consectetur quos quae eveniet perspiciatis totam, illum quas repellat corrupti voluptate consequatur mollitia temporibus esse suscipit? Harum magni earum dolor porro magnam ducimus saepe inventore quo atque molestiae quam expedita recusandae illum, aspernatur reprehenderit. Voluptatum quasi rerum non totam deserunt. Eaque.',
};
const movies = new Array(16)
    .fill(undefined)
    .map((_, index) => ({ ...harryPotter }));

class MoviesBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMovie: undefined,
        };
    }

    onMovieSelect = (movie) => {
        this.setState({ currentMovie: movie });
    };

    render() {
        if (this.state.currentMovie) {
            return <CurrentMovie movie={this.state.currentMovie} />;
        } else {
            return (
                <div className={classes.root}>
                    {movies.map((movie, index) => (
                        <div
                            onClick={() => {
                                this.onMovieSelect(movie);
                            }}
                            key={index}
                        >
                            <Poster name={movie.name} imgUrl={movie.imgUrl} />
                        </div>
                    ))}
                </div>
            );
        }
    }
}

export default MoviesBoard;
