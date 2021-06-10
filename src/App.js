import { Container, Grid } from '@material-ui/core'
import './App.css';
import Profile from './componenets/Profile/profile'
import Header from './componenets/Header/header'
import Portfolio from './pages/Portfolio/portfolio'
import Resume from './pages/Resume/resume'
import Footer from './componenets/Footer/footer'
import Services from './pages/Services/services'
import Contact from './pages/Contact/contact'

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Container className={'top_60'} >
        <Grid container spacing={7} >
          <Grid 
          item
          xs={12}
          sm={12}
          ms={4}
          lg={3}
                 >
            <Profile />
            </Grid>
          <Grid item xs >
            
            <Router>
            <Header />
            <div className="main-content">
              <Switch>
              <Route path='/portfolio'>
                <Portfolio />
              </Route>
              <Route path='/services' >
                <Services />
              </Route>
              <Route path='/contact' >
                <Contact />
              </Route>
              <Route path='/' >
                <Resume />
              </Route>
              </Switch>
              </div>
            </Router>
            
            <Footer />
         
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
