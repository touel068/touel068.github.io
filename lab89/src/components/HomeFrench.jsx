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


function HomeFrench() {
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
          </Link>
          /
          <Link color="inherit" href="/fr " >
            Français
          </Link>
      <div className="thepark">
        <h1 className="theparktitle">Bienvenue au parc du Crétacé</h1>
        <p className="theparkdescription">
        La plus célèbre de toutes les extinctions de masse a marqué la fin du Crétacé,
          il y a environ 65 millions d'années. Comme tout le monde le sait,
          ce fut la grande extinction au cours de laquelle les dinosaures se sont éteints. La période est marquée par certains des dinosaures les plus célèbres comme le tyranosaure et le tricératop.
          Si vous avez toujours voulu voir ces géants, vous avez de la chance.
          Visitez le parc du Crétacé pour voir de vrais dinosaures de cette époque !</p>
      </div>
      <div className="review">
        <Popup trigger={<button className="reviewBtn">
Laisser un avis !</button>} modal>
          <div className="video">
          <TextField id="standard-basic" label="Nom" />
          <TextField id="standard-basic" label="Avis" />
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Typography component="legend">note souriante !</Typography>
              <Rating
                name="customized-icons"
                defaultValue={2}
                getLabelText={(value) => customIcons[value].label}
                IconContainerComponent={IconContainer}
              />
            </Box>
            <Button variant="contained" color="primary" onClick={handleClick}>
                Confirmer
            </Button>
          </div>

          
        </Popup>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Avis Remis!ww
                </Alert>
            </Snackbar>
      </div>

    </div>
  );
}

export default HomeFrench;