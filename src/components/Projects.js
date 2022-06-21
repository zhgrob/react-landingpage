import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    secondaryRoot: {
        maxWidth: 345,
    },
    title: {
        color: '#aaabb8',
    }
    // specialGrid: {
    //     marginLeft: 33%,
    //     marginTop: -23%,
    // },
}));

export default function AutoGrid() {
    const classes = useStyles();

    return (
        <section id="projects">
            <br />
            <h1 className={classes.title}>My Projects</h1>
            <br />
            <br />
            <div className={classes.root}>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <Card className={classes.secondaryRoot}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image="alexa.jpg"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h4" component="h2">
                                            ClinicalSkills
          </Typography>
                                        <Typography variant="h5" color="textSecondary" component="p">
                                            Designed an Amazon Alexa application using SSML to help medical
                                            students learn the sequence of steps required to perform physical exams.
          </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="medium" color="primary">
                                        <a href="https://github.com/zhgrob">Learn More on Github</a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs>
                            <Card className={classes.secondaryRoot}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image="alphanetics.png"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h4" component="h2">
                                        Alphanetics
          </Typography>
                                        <Typography variant="h5" color="textSecondary" component="p">
                                        Developed program and underlying algorithm to create an efficient method of sharing correct name pronunciations.
                                        Front-end designed using JavaScript, HTML, and CSS, back-end algorithm leveraged International Phonetic 
                                        Alphabet to split names into graphemes.

          </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="medium" color="primary">
                                        <a href="https://github.com/zhgrob">Learn More on Github</a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs>
                            <Card className={classes.secondaryRoot}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image="TDsASL.png"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h4" component="h2">
                                        TD’S ASL Helper
          </Typography>
                                        <Typography variant="h5" color="textSecondary" component="p">
                                        Used machine learning and Clarifai API to recognize ASL characters and 
                                        generate banking information for the user; Code written in Python and JavaScript. 
                                        Awarded TD’s Da Vinci API Prize of $2000 for best-use of TD’s API
          </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="medium" color="primary">
                                        <a href="https://github.com/zhgrob">Learn More on Github</a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
<Grid container spacing={3} className="specialSide">
                        <Grid item xs>
                            <Card className={classes.secondaryRoot}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        width="100"
                                        image="finalSale.png"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h4" component="h2">
                                        Final-Sale WebCrawler
          </Typography>
                                        <Typography variant="h5" color="textSecondary" component="p">
                                        Webcrawler designed to retrieve all final sale items from clothing store
                                        Dynamite's sale page using python's Scrapy framework and handling output as JSON file.
          </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="medium" color="primary">
                                    <a href="#about">https://github.com/zhgrob</a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                    </Grid>
                   
 <Grid container spacing={3} className="specialGrid">
                        <Grid item xs={4}>
                            <Card className={classes.secondaryRoot}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image="biquadris.png"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h4" component="h2">
                                        BiQuadris
          </Typography>
                                        <Typography variant="h5" color="textSecondary" component="p">
                                        Designed a two player Tetris game with graphics, 
                                        including creation of UML diagrams using concepts such as inheritance, 
                                        composition and aggregation. Made with C++, with graphics through XWindow. Achieved 98% final grade.
          </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="medium" color="primary">
                                    <a href="#about">https://github.com/zhgrob</a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        
                    </Grid>
                </Container>
            </div>
            <br/>
            <br/>
        </section>
    );
}
