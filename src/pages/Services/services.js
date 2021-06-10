import { Grid, Icon, Paper, Typography } from '@material-ui/core'
import React from 'react'
import resumeData from '../../utils/resumeData'



import './services.css'
import TimelineDot from '@material-ui/lab/TimelineDot';


function services() {
    return (
        <>
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
</>
    )
}

export default services
