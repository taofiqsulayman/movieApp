import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FavoriteIcon from '@mui/icons-material/Favorite';


const IMG_API = "https://image.tmdb.org/t/p/w1280";



const Movie = ({title, poster_path, overview, release_date, vote_average, vote_count}) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <div className='movie'>
      <div className="movie-title">
        <h5>{title}</h5>
      </div>

      <div>

        <img src={IMG_API + poster_path} alt={title} onClick={handleOpen} />

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='modalbox'>
          <Typography id="modal-modal-title" sx={{ color: "rgb(255, 136, 0)" }} variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div style={{backgroundColor: "black"}}>

            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
              <div>
                <p>Released: </p>
              </div>
              <div>
                <p style={{ color: "#2a9fd6"}}>{release_date}</p>
              </div> 
            </div>

            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
              <div>
                <p>Rating: </p>
              </div>
              <div>
                <p style={{ color: "#2a9fd6"}}>{vote_average}({vote_count} votes)</p>
              </div> 
            </div>

            <div class="row" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
              <div style={{ margin: 2 }}>
                <p>Story: </p>
              </div>
              <div style={{ margin: 2 }}>
                <p style={{ color: "#2a9fd6" }}>{overview}</p>
              </div> 
            </div>

          </div>
          </Typography>
        </Box>
      </Modal>
      </div>

      <div className="movie-info">
        <h5>{release_date}</h5>
        <FavoriteIcon sx={{ color: "whitesmoke", margin: 1 }}/>
      </div>

    </div>
  );
};

export default Movie;