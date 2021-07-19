import React from "react";
import Button from '@material-ui/core/Button';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Rating from '@material-ui/lab/Rating';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Link from '@material-ui/core/Link';
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


function Home() {
  const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon />,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfiedIcon />,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfiedIcon />,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon />,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon />,
      label: 'Very Satisfied',
    },
  };
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
  function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }
  
  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };
  return (
    <div className="home">
       <Link color="inherit" href="/">
           English
          </Link>/
          <Link color="inherit" href="/fr " >
            Français
          </Link>
      <div className="thepark">
        <h1 className="theparktitle">Welcome to Cretaceous Park</h1>
        <p className="theparkdescription">
          The most famous of all mass extinctions marked the end of the Cretaceous Period,
          about 65 million years ago. As everyone knows,
          this was the great extinction in which the dinosaurs died out. The period is marked by some of the most famous dinosaurs like the tyranosaurus and the triceratop.
          If you ever wanted to see these giants, you are in luck.
          Visit the cretaceous park to see real dinosaurs from that era! </p>
      </div>
      <div className="review">
        <Popup trigger={<button className="reviewBtn">Leave Review!</button>} modal>
          <div className="video">
          <TextField id="standard-basic" label="Your name" />
          <TextField id="standard-basic" label="Review" />
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Typography component="legend">smiley rating!</Typography>
              <Rating
                name="customized-icons"
                defaultValue={2}
                getLabelText={(value) => customIcons[value].label}
                IconContainerComponent={IconContainer}
              />
            </Box>
            <Button variant="contained" color="primary" onClick={handleClick}>
                Submit
            </Button>
          </div>

          
        </Popup>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Review Submitted!
                </Alert>
            </Snackbar>
      </div>

    </div>
  );
}

export default Home;