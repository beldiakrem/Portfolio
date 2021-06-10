import { Typography } from '@material-ui/core'
import React from 'react'
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/timeline'
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import CustomButton from '../Buttons/button'
import GetAppIcon from '@material-ui/icons/GetApp';
import Typed from "react-typed";

import Akrem from '../../assests/images/akrem.jpg'

import resumeData from '../../utils/resumeData'

import './profile.css'


const CustomTimelineItem = ({title, text, link}) => (
<TimelineItem >
     <CustomTimelineSeparator />
     <TimelineContent className="timeline_content">
       
       {link ? (<Typography className="timelineItem_text">
        <span>{title}:</span> {"  "}
        <a href={link} target='_blank'> 
        {text} 
        </a>
       </Typography>) : (
           <Typography className="timelineItem_text" ><span>{title}:</span> {text}</Typography>
       )}
     </TimelineContent>
  </TimelineItem>
)

const profile = () => {
    return (
        <div className="profile container_shadow">
        <div className="profile_name">
            <Typography className="name">{resumeData.name}</Typography>
            {/* <Typography className="title">{resumeData.title}</Typography> */}
            <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                  className="title"
                    strings={[
                      "Développeur Full StackJS",
                      "Développeur Front-End ReactJS",
                      "Intégrateur Wordpress"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
        </div>
        
        <figure className="profile_image" >
            <img src={Akrem} alt="" />
        </figure>
        
        <div className="profile_information" >
           < CustomTimeline icon={<PersonOutlineOutlinedIcon />} >
             <CustomTimelineItem title='Nom & Prénom' text={resumeData.name} />
             <CustomTimelineItem title='Titre' text={resumeData.title} />
             <CustomTimelineItem title='Date de Naissance' text={resumeData.dateNaissance} />
             <CustomTimelineItem title='Email' text={resumeData.email} />
             <CustomTimelineItem title='Adress' text={resumeData.adress} />
             <CustomTimelineItem title='Téléphone' text={resumeData.phone} />
{/* {Object.keys(resumeData.social).map((key) => (
               <CustomTimelineItem title={key} text={resumeData.social[key].text} link={resumeData.social[key].link} />
             ))} */}
           </CustomTimeline>
            <br />
            <div className="button_container" style={{display:"flex"}}>
            <CustomButton text={'Télécharger CV'} icon={<GetAppIcon />} />
            </div>
           
        </div>
    </div>
    )
}

export default profile
