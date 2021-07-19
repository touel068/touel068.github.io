import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 1000,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));



function Activities() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  
    setOpen(false);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <div className={classes.root}>
          <div className="continentTitle"><h1>Activities</h1></div>
      
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Added to reservation
        </Alert>
      </Snackbar>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Tours" {...a11yProps(0)} />
        <Tab label="Corporate Events" {...a11yProps(1)} />
        <Tab label="Private Event" {...a11yProps(2)} />
        <Tab label="Weddings" {...a11yProps(3)} />
      </Tabs>
  
      <TabPanel value={value} index={0}>
        <div className="activityCards">
     
          <div class="card">
            <div class="card-header">
              Triceratop Ride
            </div>
            <div class="card-body">
              <h5 class="card-title">Tour 1</h5>
              <p class="card-text">20 minute ride on triceratops</p>
              <a href="#!" class="btn btn-primary" onClick={handleClick}>Reserve</a>
            </div>
          </div>
          <br></br>
          <div class="card">
            <div class="card-header">
              Carnivore tour
            </div>
            <div class="card-body">
              <h5 class="card-title">Tour 2</h5>
              <p class="card-text">Tour in cage in carnivore dinosaurs enclosures</p>
              <a href="#!" class="btn btn-primary" onClick={handleClick}>Reserve</a>
            </div>
          </div>
          <br></br>
          <div class="card">
            <div class="card-header">
              Jungle Tour
            </div>
            <div class="card-body">
              <h5 class="card-title">Tour 3</h5>
              <p class="card-text">Walk in the jungle with small herbivore dinosaurs</p>
              <a href="#!" class="btn btn-primary" onClick={handleClick} >Reserve</a>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="activityCards">
          <div class="card">
            <div class="card-header">
              Gastronomic Offer
            </div>
            <div class="card-body">
              <h5 class="card-title">Corporate Event 1</h5>
              <p class="card-text">Eat prehistoric food</p>
              <a href="#!" class="btn btn-primary" onClick={handleClick}>Reserve</a>
            </div>
          </div>
          <br></br>
          <div class="card">
            <div class="card-header">
              Unique venues
            </div>
            <div class="card-body">
              <h5 class="card-title">Corporate Event 2</h5>
              <p class="card-text">Take advantage of unique venues at the park</p>
              <a href="#!" class="btn btn-primary" onClick={handleClick}>Reserve</a>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="activityCards">
          <div class="card">
            <div class="card-header">
              Private visit
            </div>
            <div class="card-body">
              <h5 class="card-title">Private event 1</h5>
              <p class="card-text">private visit of the park with a guide. Visit the backstage of the park</p>
              <a href="#!" class="btn btn-primary" onClick={handleClick}>reserve</a>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div className="activityCards">
          <div class="card">
            <div class="card-header">
              Wedding
            </div>
            <div class="card-body">
              <h5 class="card-title">Wedding 1</h5>
              <p class="card-text">Plan your wedding at the park</p>
              <a href="#!" class="btn btn-primary" onClick={handleClick}>Reserve</a>
            </div>
          </div>
        </div>
      </TabPanel>

    </div>
  );
}
export default Activities;