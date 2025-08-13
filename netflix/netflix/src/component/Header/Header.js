import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import React from 'react';
import "./header.css"
import NetflixLogo from '../../assets/image/Netflix_Logo_PMS.png'

const Header = () => {
  return (
  <div className='header_outer_container'>
    <div className='header_container'>
      <div className='header_left'>
        <ul>
            <li><img src={NetflixLogo} alt= "netflix Logo" width={100}/></li>
            <li>Home</li>
            <li>Tvshow</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>Mylist</li>
            <li>Browse by languages</li>
        </ul>
      </div>
      <div className='header_right'>
        <ul>
            <li><SearchIcon/></li>
            <li><NotificationsIcon/></li>
            <li><AccountBoxIcon/></li>
            <li><ArrowDropDownIcon/></li>
        </ul>
      </div>
    </div>
  </div> 
   
  )
}

export default Header
