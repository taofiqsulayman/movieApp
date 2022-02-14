import * as React from 'react';
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

const Header = ({getMovies, SEARCH_API, FEATURED_API, NOW_PLAYING, TRENDING, POPULAR, UPCOMING_MOVIES,DISCOVER_MOVIES}) => {

  const [open, setOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");



  // SEARCH

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const fetchSearch = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies (SEARCH_API + searchTerm);
    }
    
    setSearchTerm("");

    document.getElementById("footertext").innerText = "Search Results";

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



  return (
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
              <MenuItem value="none">
              <em>None</em>
              </MenuItem>
              <MenuItem value={DISCOVER_MOVIES}>Discover Movies</MenuItem>
              <MenuItem value={UPCOMING_MOVIES}>Upcoming Movies</MenuItem>
            </Select>
        </FormControl>

        <ButtonGroup size="small" variant="outlined" aria-label="outlined button group" sx={{ marginLeft: 1 }} >        
          
          <Input size="small" 
          sx={{color: "rgb(255, 136, 0)", border: 1, borderRadius: 1 }} 
          onChange={handleChange} onSubmit={fetchSearch}/>

          <Button sx={{color: "rgb(255, 136, 0)", border: 1, borderRadius: 1 }} aria-label="delete" endIcon={<BackspaceIcon />}>
          </Button>

          <Button sx={{color: "rgb(255, 136, 0)", border: 1, borderRadius: 1 }}  aria-label="search" 
          endIcon={<SearchIcon />} onClick={fetchSearch}>
          </Button>

        </ButtonGroup>

        </div>

      </div>

    </Container>



  </div>
);
  

  
  
};

export default Header;




