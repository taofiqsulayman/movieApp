import React from 'react';
import { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import BackspaceIcon from '@mui/icons-material/Backspace';
import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import VideocamIcon from '@mui/icons-material/Videocam';
import HomeIcon from '@mui/icons-material/Home';

import ButtonGroup from '@mui/material/ButtonGroup';
import { Container, Input } from '@mui/material';

import './App.css';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Movie from './components/Movie';


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
  const [open, setOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");

  // const getMovies = async (API) => {
  //   setLoading(true);

  //   try {
  //     const response = await fetch(API);
  //     const data = response.json();

  //     setLoading(false);

  //     console.log(data);
  //     setMovies(data.results);

  //   } catch (error) {
  //     setLoading(true);
      
  //   }

    
  // };



const getMovies = (API) => {
    fetch(API) 
    .then((res) => res.json())
    .then((data) => {

      setLoading(false);
      console.log(data);
      setMovies(data.results);
    });
  };


  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

 // SEARCH

const handleChange = (e) => {
  setSearchTerm(e.target.value);
}

const clearSearch = (e) => {
  document.getElementById('searchbox').value = '';
  goHome();
}

const fetchSearch = (e) => {
  e.preventDefault();

  if (searchTerm) {
    getMovies (SEARCH_API + searchTerm);

    document.getElementById("footertext").innerText = "Search Results";
    
  }
  
  setSearchTerm("");

};

// BUTTONS FUNCTIONALITIES

const goHome = (e) => {
  getMovies (FEATURED_API);
  document.getElementById("footertext").innerText = "Featured";
}

const nowPlaying = (e) => {
  getMovies(NOW_PLAYING);
  document.getElementById("footertext").innerText = "Now playing";
}

const getTrending = (e) => {
  getMovies(TRENDING);
  document.getElementById("footertext").innerText = "Trending";
}

const popularMovies = (e) => {
  getMovies(POPULAR);
  document.getElementById("footertext").innerText = "Popular Movies";
}



// DROPDOWN BUTTON

const handleDropdown = (event) => {
  getMovies(event.target.value)

  document.getElementById("footertext").innerText = "";
};

const handleClose = () => {
  setOpen(false);
};

const handleOpen = () => {
  setOpen(true);
};




// MODIFY THE CODE TO DISPLAY EERORS IN ABSENCE OF NETWORK


  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <>
      
      <div className='header'>

        <Container>

          <div className="headercontent">

          <Button sx={{color: "rgb(255, 136, 0)", border: 1, borderRadius:1, marginRight: 0.5, textTransform: 'none' }} 
          variant="outlined" endIcon={<HomeIcon />}
          onClick={goHome}>
            Home
          </Button>

          <Button sx={{color: "green", border: 1, borderRadius: 1, marginLeft:0.5, textTransform: 'none' }} variant="outlined" >
            Powered By TMDb
          </Button>


            <div className="disappearing">

            <Button sx={{color: "rgb(255, 136, 0)", border: 1, borderRadius:1, marginLeft: 1, textTransform: 'none' }} 
            variant="outlined" endIcon={<VideocamIcon />}
            onClick={nowPlaying}>
              Now Playing
            </Button>

            <Button sx={{color: "rgb(255, 136, 0)", border: 1, borderRadius: 1, marginLeft: 1, textTransform: 'none' }} 
            variant="outlined" endIcon={<WhatshotIcon />} onClick={getTrending}>
              Trending
            </Button>

            <Button variant="outlined" endIcon={<StarBorderIcon />} sx={{color: "rgb(255, 136, 0)", border: 1, borderRadius: 1, marginLeft: 1, textTransform: 'none' }} onClick={popularMovies}>
              Popular Movies
            </Button>


            <FormControl sx={{ minWidth: 120, color: "rgb(255, 136, 0)", border: 1, borderRadius:1, marginLeft: 1 }} >
              <InputLabel sx={{color: "rgb(255, 136, 0)" }} 
              id="demo-controlled-open-select-label">
                Explore
              </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  label="Explore"
                  sx={{color: "rgb(255, 136, 0)" }}
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  onChange={handleDropdown}
                  size="small"
                >
                  <MenuItem value="">
                  <em>None</em>
                  </MenuItem>
                  <MenuItem value={DISCOVER_MOVIES}>Discover Movies</MenuItem>
                  <MenuItem value={UPCOMING_MOVIES}>Upcoming Movies</MenuItem>
                </Select>
            </FormControl>

            <ButtonGroup size="small" variant="outlined" aria-label="outlined button group" sx={{ marginLeft: 1 }} >        
              
              <Input size="small" id='searchbox'
              sx={{color: "rgb(255, 136, 0)", border: 1, borderRadius: 1 }} 
              onChange={handleChange} onSubmit={fetchSearch}/>

              <Button sx={{color: "rgb(255, 136, 0)", border: 1, borderRadius: 1 }} aria-label="delete" endIcon={<BackspaceIcon />} onClick={clearSearch}>
              </Button>

              <Button sx={{color: "rgb(255, 136, 0)", border: 1, borderRadius: 1 }}  aria-label="search" 
              endIcon={<SearchIcon />} onClick={fetchSearch}>
              </Button>

            </ButtonGroup>

            </div>

          </div>

        </Container>

      </div>  

      <Container>
        <div className="movie-container">
          {movies.length > 0 && 
          movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
          ))}  
        </div>
      </Container>

      <Footer />
    
    </>
    
  );
}

export default App;
