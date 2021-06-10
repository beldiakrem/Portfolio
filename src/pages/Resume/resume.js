import { Grid, Icon, Paper, TextField, Typography } from '@material-ui/core'
import React from 'react'
import resumeData from '../../utils/resumeData'
import CustomTimeline, { CustomTimelineSeparator } from '../../componenets/Timeline/timeline'
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import CustomButton from '../../componenets/Buttons/button'


import './resume.css'
import TimelineDot from '@material-ui/lab/TimelineDot';

const resume = () => {
    return (
        <>
            {/* About me */}
            <Grid container className="section pb_45">
                <Grid item className="section_title mb_30" >
                    <span></span>
                    <h6 className="section_title_text"> À Propos </h6>
                </Grid>
                <Grid xs={12}>
                    <Typography variant='body2' className="aboutme_text" >
                        {resumeData.about}
                    </Typography>
                </Grid>
            </Grid>


            {/* Education and Experiences */}
            <Grid container className="section pb_45">
                <Grid item className="section_title mb_30" >
                    <span></span>
                    <h6 className="section_title_text"> Expériences & Diplomes </h6>
                </Grid>
                <Grid item xs={12}>
                    <Grid container className="resume_timeline">
                        {/* Experiences */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title="Expériences"
                                icon={<WorkIcon />} >
                                {resumeData.experiences.map((experience) => (
                                    <TimelineItem>
                                        <CustomTimelineSeparator />
                                        <TimelineContent className="timeline_content">
                                            <Typography className="timeline_title" >
                                                {experience.title}
                                            </Typography>
                                            <Typography variant="caption" className="timeline_date"  >
                                                {experience.date}
                                            </Typography>
                                            <Typography variant="body2" className="timeline_description"  >
                                                {experience.description}
                                            </Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>

                        {/* Education */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title="Diplomes"
                                icon={<SchoolIcon />} >
                                {resumeData.educations.map(education => (
                                    <TimelineItem>
                                        <CustomTimelineSeparator />
                                        <TimelineContent className="timeline_content">
                                            <Typography className="timeline_title" >
                                                {education.title}
                                            </Typography>
                                            <Typography variant="caption" className="timeline_date"  >
                                                {education.date}
                                            </Typography>
                                            <Typography variant="body2" className="timeline_description"  >
                                                {education.description}
                                            </Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* Services */}
            <Grid container className="section pb_45">
                <Grid item className="section_title mb_30" >
                    <span></span>
                    <h6 className="section_title_text"> Mes Services </h6>
                </Grid>
                <Grid item xs={12} >
                    <Grid container spacing={3} justify='space-around'>
                        {resumeData.services.map((service) => (
                            <Grid item xs={12} sm={6} md={3} >

                                <div className="service">
                                    <Icon className="service_icon" >{service.icon}</Icon>
                                    <Typography className="service_title" variant="h6" >{service.title}</Typography>
                                    <Typography className="service_description" variant="body2" >{service.description}</Typography>
                                </div>

                            </Grid>

                        ))}
                    </Grid>

                </Grid>
            </Grid>

            {/* Skills */}
            <Grid container className="section graybg pb_45 p_50 ">
                <Grid item xs={12}>
                    <Grid container justify='space-between' spacing={3}>
                        {resumeData.skills.map((skill) => (
                            <Grid item xs={12} sm={6} md={3} >
                                <Paper elevation={0} className="skill">
                                    <Typography className="skill_title" variant="h6" >
                                        {skill.title}
                                    </Typography >
                                    {skill.description.map((el) => (
                                        <Typography variant="body2" className="skill_description" >
                                            <TimelineDot variant={'outlined'} className="timeline_dot" />
                                            {el}
                                        </Typography>
                                    ))}
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

            </Grid>

            {/* Contact */}
            <Grid container className="section pt_45" spacing={6} >
                {/* contact fomr */}
                <Grid item xs={12} lg={7} >
                    <Grid container>
                        <Grid item className="section_title mb_30 " >
                            <span></span>
                            <h6 className="section_title_text"> Contact Form </h6>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2} >
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name='name' label="Name" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name='email' label="Email" />
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField fullWidth name='message' label="Message" multiline rows={4} />
                                </Grid>
                                <Grid item xs={12} >
                                    <CustomButton text='Envoyer' />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                {/* contact information */}
                <Grid item xs={12} lg={5} >
                    <Grid container>
                        <Grid item className="section_title mb_30" >
                            <span></span>
                            <h6 className="section_title_text"> Contact Information </h6>
                        </Grid>
                        <Grid item xs={12} >
                            <Grid container >
                                <Grid item xs={12} >
                                    <Typography className="contactinfo_item" >
                                         <span>Adress:</span> {resumeData.adress}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} >
                                    <Typography className="contactinfo_item" >
                                         <span>Téléphone:</span> {resumeData.phone}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} >
                                    <Typography className="contactinfo_item" >
                                         <span>Email:</span> {resumeData.email}
                                    </Typography>
                                </Grid>
                            </Grid>

                        </Grid>
                         
                        <Grid item xs={12} >
                            <Grid container className="contactinfo_socialcontainer">
                               {Object.keys(resumeData.social).map((key) => (
                                  <Grid item className="contactinfo_social" > 
                                  <a href={resumeData.social[key].link} >{resumeData.social[key].icon}</a>
                                  </Grid>
                               ))}
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>


            </Grid>

        </>
    )
}

export default resume
