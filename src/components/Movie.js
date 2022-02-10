import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FavoriteIcon from '@mui/icons-material/Favorite';


const IMG_API = "https://image.tmdb.org/t/p/w1280";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'black',
  boxShadow: 24,
  p: 4,
  color: 'white',
};


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
        <Box sx={style}>
          <Typography id="modal-modal-title" sx={{ color: "gold" }} variant="h6" component="h2">
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

            <div style={{ display: "flex", flexDirection: "row"}}>
              <div>
                <p>Rating: </p>
              </div>
              <div>
                <p style={{ color: "#2a9fd6"}}>{vote_average}({vote_count} votes)</p>
              </div> 
            </div>

            <div class="row" style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
              <div>
                <p>Story: </p>
              </div>
              <div>
                <p style={{ color: "#2a9fd6"}}>{overview}</p>
              </div> 
            </div>

          </div>
          </Typography>
        </Box>
      </Modal>
      </div>

      <div className="movie-info">
        <h5>{release_date}</h5>
        <FavoriteIcon />
      </div>

    </div>
  );
};

export default Movie;