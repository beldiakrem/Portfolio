import { Typography } from '@material-ui/core';
import React from 'react';
import './footer.css';
import resumeData from  '../../utils/resumeData'

const footer = () => {
    return (
        <div className='footer'>

           <div className="footer_left">
             <Typography className="footer_name">{resumeData.name}</Typography>
           </div>
           <div className="footer_right">
             <Typography className="footer_copyright">
                 Designed and Developed by {"  "}
                 <a href="/" target="_blank">
                     Akrem BELDI
                 </a>
             </Typography>
           </div>

        </div>
    )
}

export default footer
