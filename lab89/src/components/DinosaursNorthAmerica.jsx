import React from "react";
//import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ReactPlayer from 'react-player'


function handleClick(continent) {

}

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

function DinosaursNorthAmerica() {
    const dinos = [
        { name: 'Tyranosaurus', continent: 'North America', image: 'https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/tyran.jpg', url: 'https://youtu.be/lIo7cG0Mt4s' },
        { name: 'Triceratops', continent: 'North America', image: 'https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/triceratops.jpg', url: 'https://youtu.be/lIo7cG0Mt4s' },
        { name: 'Argentinosaurus', continent: 'South America', image: 'https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/argent.jpg', url: 'https://youtu.be/lIo7cG0Mt4s' },
        { name: 'Velociraptor', continent: 'Asia', image: 'https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/veloc.jpg', url: 'https://youtu.be/lIo7cG0Mt4s' },
        { name: 'Tylocephale', continent: 'Asia', image: 'https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/Tylocephale.jpg', url: 'https://youtu.be/lIo7cG0Mt4s' },
        { name: 'Spinosaurus', continent: 'Africa', image: 'https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/spino.jpg', url: 'https://youtu.be/lIo7cG0Mt4s' },
        { name: 'Troodon', continent: 'North America', image: 'https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/troo.jpg', url: 'https://youtu.be/SWYe5pR1jTM' },
        { name: 'Saichania', continent: 'Asia', image: 'https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/saich.jpg', url: 'https://youtu.be/lIo7cG0Mt4s' },
        { name: 'Parasaurolophus', continent: 'North America', image: 'https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/parasaur.jpg', url: 'https://youtu.be/lIo7cG0Mt4s' },
        { name: 'Albertosaurus', continent: 'North America', image: 'https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/albert.jpg', url: 'https://youtu.be/lIo7cG0Mt4s' }



    ];

    const classes = useStyles();


    return (
        <div className="dinosaurs">
            <div className="breadcrumbs">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="dinosaurs" onClick={handleClick("All")}>
                        All
                    </Link>
                    <Link color="inherit" href="/africa" onClick={handleClick("Africa")}>
                        Africa
                    </Link>
                    <Link color="inherit" href="/asia" onClick={handleClick("Asia")}>
                        Asia
                    </Link>
                    <Link color="inherit" href="/europe" onClick={handleClick("Europe")}>
                        Europe
                    </Link>
                    <Link color="inherit" href="/northamerica" onClick={handleClick("NorthAmerica")}>
                        NorthAmerica
                    </Link>
                    <Link color="inherit" href="/southamerica" onClick={handleClick("SouthAmerica")}>
                        SouthAmerica
                    </Link>
                </Breadcrumbs>
            </div>
            <div className="continentTitle"><h1>North America</h1></div>
            <div className="allCards">
                {dinos.filter(first => first.continent === "North America").map(dino => (
                    <div className="cardContainer">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Picture"
                                    height="140"
                                    className={classes.root}
                                    image={dino.image}
                                    title={dino.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {dino.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {dino.continent}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Popup trigger={<button className="button"> View Video </button>} modal>
                                    <div className="video">
                                        <ReactPlayer url={dino.url} />
                                    </div>
                                </Popup>
                            </CardActions>
                        </Card>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default DinosaursNorthAmerica;
