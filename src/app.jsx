import React, { Component } from 'react';
import Home from './components/home/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import classes from './app.module.css';
import TopBar from './components/top-bar/top-bar';
import MoviesBoard from './components/movies-board/movies-board';

const App = () => {
    return (
        <div className={classes.root}>
            <BrowserRouter>
                <TopBar />
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/movies-board' element={<MoviesBoard />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
