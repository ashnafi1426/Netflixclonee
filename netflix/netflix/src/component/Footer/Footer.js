import React from 'react'
// import FacebookIcon from '@mui/icons-material/Facebook';
import "./footer.css";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <div className='footer_outer_container'>
      <div className='Footer_inner_container'>
        <div className='footer_icons'>
        <FacebookOutlinedIcon/>
        <YouTubeIcon/>
        <InstagramIcon/>
        </div>
        <div className='footer_data'>
           <div>
              <ul>
            <li>Audio description</li>
             <li>Investor relations</li>
             <li>Legal Notice</li>
              </ul>
         </div>
          <div>
           <ul>
             <li>Help center</li>
             <li>Jobs</li>
             <li>Cookie Preferences</li>
           </ul>
         </div>
          <div>
          <ul>
             <li>Gift card</li>
             <li>Terms of use</li>
             <li>Corporate information</li>
          </ul>
         </div>
          <div>
          <ul>
             <li>Media center</li>
             <li>Privacy</li>
             <li>Contact us</li>
          </ul>
         </div>
        </div>
        <div className='service_code'>
         <p>Service Code</p>
        </div>
        <div className='copy_write'>
            &copy;1997-2004Netflix,Inc.
        </div>
      </div>
    </div>
  )
}
export default Footer
