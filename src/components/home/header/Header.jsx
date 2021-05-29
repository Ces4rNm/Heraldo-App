import React from 'react';
import './Header.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Header({titulo}) {
    
    return (
        <div className="page-header py-5">  

        <Link to="/">{titulo}</Link>

        </div>

        
    )
}


export default Header;