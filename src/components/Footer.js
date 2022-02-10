import * as React from 'react';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Container } from '@mui/material';

const Footer = () => {

  return (
    
    
  <div className="footer">
    
    <Container>
      <div className='bottomnav'>
        <div className="bottomnavtxt">
          <h3 id="footertext"> testing </h3>
        </div>

        <div className='bottom-nav-icons'>
          <BottomNavigation sx={{ backgroundColor: "rgb(85, 85, 85)"}}>
          <BottomNavigationAction sx={{ color: "rgb(255, 136, 0)" }}
            icon={< ArrowCircleDownIcon fontSize="large" />} 
            onClick={() => window.scrollTo({ left: 0, top: document.body.scrollHeight })}
          />
          <BottomNavigationAction sx={{ color: "rgb(255, 136, 0)"}}
          icon={< ArrowCircleUpIcon fontSize="large" />} 
          onClick = {() => window.scroll(0,0)}
          />
          </BottomNavigation>
        </div>
      </div>
    </Container>
        
      
      
  </div>
  );
  
  
};

export default Footer;






// export default function FixedBottomNavigation() {

//   return (
//     <Container >
      
//     </Container>
//   );
// }

