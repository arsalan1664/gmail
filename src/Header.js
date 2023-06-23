import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import {Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import TuneIcon from '@mui/icons-material/Tune';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <IconButton>
              <MenuIcon/>
            </IconButton> 
            <img src='https://logodownload.org/wp-content/uploads/2018/03/gmail-logo.png' alt=''/>
        </div>
        <div className="header__middle">
           <IconButton> 
              <SearchIcon/>
            </IconButton>
            <input placeholder='Search mail' type='text' />
            <TuneIcon className="header__inputCaret"/>
        </div>
        <div className="header__right">

             <IconButton>
              <HelpOutlineIcon/>
            </IconButton>
            
            <IconButton>
             <SettingsIcon/>
            </IconButton>

            <IconButton>
             <AppsIcon/>
            </IconButton>

            

            <Avatar/>
        </div>
    </div>
  )
}

export default Header