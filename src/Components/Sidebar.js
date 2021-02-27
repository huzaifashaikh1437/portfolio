import React, { useState } from 'react';
import './sidebar.css';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
function Sidebar() {
    const [isToggle, setisToggle] = useState(false);

    const handleToogle = ()=>{
        setisToggle(!isToggle);
    }
    
    return (
        <div className="sidebar">
            <div className="sidebar__icon">
                <IconButton onClick={handleToogle}><MenuIcon/></IconButton>
            </div>

            <div className={isToggle ? "sidebar__menu hideMenu" : "sidebar__menu"}>
                <ul className="sidebar__items" onClick={handleToogle}>
                    <li className="sidebarItems__clearIcon"><IconButton><ClearIcon/></IconButton></li>
                    <li><a href="#intro">ME</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
