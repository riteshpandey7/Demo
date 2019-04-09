import React, { Component } from 'react';

class NavBar extends Component {
    
    render() {
        
      return (
        <div className="navBar" >
            <div style={{backgroundColor : "rgba(0,0,0,0.7)", color : "white",padding:"15px", fontSize: "25", height : "20px"}}>
              <div style={{float:"left"}}>
                AppBox
              </div>
              <div style={{float:"right",backgroundColor:"white"}}>
                <li style={{display:"inline",padding:"5px"}}><a href="https://www.google.com/">Home</a></li>
                <li style={{display:"inline",padding:"5px"}}><a href="https://www.google.com/">Login</a></li>
                <li style={{display:"inline",padding:"5px"}}><a href="https://www.google.com/">About</a></li>
                <li style={{display:"inline",padding:"5px"}}><a href="https://www.google.com/">Contact us</a></li>
              </div>
            </div>
        </div>
      );
    }
}

  export default NavBar;