import React from 'react'
import { Nav, Navbar} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeRounded, Telegram } from "@material-ui/icons";
import { NavLink, withRouter } from 'react-router-dom'
import resumeData from '../../utils/resumeData'
import CustomButton from '../Buttons/button'

import './header.css'

const Header = (props) => {
    const pathName = props?.location?.pathname;
    return (
    <Navbar expand="lg" sticky="top" className="header">
        {/* Home link */}

       <Nav.Link as={NavLink} to='/' className='header_navlink' >
           <Navbar.Brand className="header_home" >
               <HomeRounded /> 
           </Navbar.Brand>
       </Nav.Link>
       <Navbar.Toggle />
       
       <Navbar.Collapse >
           <Nav className='header_left'>
               {/* Resume Link */}
             <Nav.Link
                as={NavLink}
                to="/"
                className={pathName === "/" ? "header_link_active" : "header_link"} >
                À Propos
             </Nav.Link>

             {/* Services Link */}
             <Nav.Link
                as={NavLink}
                to="/services"
                className={pathName === "/services" ? "header_link_active" : "header_link"} >
                Mes Services
             </Nav.Link>

              {/* Portfolio Link */}
              <Nav.Link
                as={NavLink}
                to="/portfolio"
                className={pathName === "/portfolio" ? "header_link_active" : "header_link"} >
                Portfolio
             </Nav.Link>
             
              {/* Contact Link */}
              <Nav.Link
                as={NavLink}
                to="/contact"
                className={pathName === "/contact" ? "header_link_active" : "header_link"} >
               Contact
             </Nav.Link>

           </Nav>
           <div className="header_right">
               {Object.keys(resumeData.social).map(key => (
                   <a href={resumeData.social[key].link} target='_blank' rel="noreferrer">
                   {resumeData.social[key].icon}
                   </a>
               )) }
               <CustomButton text={'Contactez Moi'} icon={<Telegram />} />
           </div>
       </Navbar.Collapse>
    </Navbar>
    )
}

export default withRouter(Header);
