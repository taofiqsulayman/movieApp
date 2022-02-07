import React from 'react';
import { useState, useEffect } from 'react';

import './App.css';
import Footer from './components/Footer';
import Loading from './components/Loading';


const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

// const IMG_API = "https://image.tmdb.org/t/p/w1280";


const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const TRENDING = "https://api.themoviedb.org/3/trending/movie/day?api_key=04c35731a5ee918f014970082a0088b1"

const NOW_PLAYING = "https://api.themoviedb.org/3/movie/now_playing?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1"

const POPULAR = "https://api.themoviedb.org/3/movie/popular?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1"

const DISCOVER_MOVIES = "https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"

const UPCOMING_MOVIES = "https://api.themoviedb.org/3/movie/upcoming?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1"



function App() {

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async (API) => {
    setLoading(true);
    const response = await fetch(API);
    const data = response.json();

    console.log(data);
    setMovies(data.results);
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  



  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    
    <Footer />
  );
}

export default App;
