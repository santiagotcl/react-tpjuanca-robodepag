import React from 'react'
import {Link, MemoryRoute} from 'react-router-dom'

const mystyle = {
    display: "flex",
    justifyContent: "center",
    padding: "10px",
    fontFamily: "Arial"
  };

const Footer = () => {
    return ( 
        <div>
            <ul style={mystyle}>
                <a href="https://www.facebook.com" style={{margin:"10px"}}>Mi facebook</a>
                <a href="https://www.twitter.com" style={{margin:"10px"}}>Mi Twitter</a>
            </ul>
        </div>
    )
}
export default Footer;