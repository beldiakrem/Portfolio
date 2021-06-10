import { Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'
import resumeData from '../../utils/resumeData'
import CustomButton from '../../componenets/Buttons/button'


import './contact.css'

function contact() {
    return (
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
    )
}

export default contact
