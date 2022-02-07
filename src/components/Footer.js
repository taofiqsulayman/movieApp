import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Container } from '@mui/material';

const Footer = () => {

  return (
    
    
  <div className="footer">
    <CssBaseline />  
    
    <Container>
      <div className='bottomnav'>
        <div className="bottomnavtxt">
          <h3 id="footertext"> testing </h3>
        </div>

        <div className='bottom-nav-icons'>
          <BottomNavigation>
          <BottomNavigationAction
            style={{ color: "rgb(255, 136, 0)", backgroundColor: "rgba(85, 85, 85, 0.5)", paddingRight: 0, margin: 0 }}
            icon={< ArrowCircleDownIcon fontSize="large" />}
          />
          <BottomNavigationAction
          style={{ color: "rgb(255, 136, 0)", backgroundColor: "rgba(85, 85, 85, 0.5)", paddingLeft: 0, margin: 0 }}
          icon={< ArrowCircleUpIcon fontSize="large" />} 
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

