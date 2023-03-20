import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MaterialLink from "@material-ui/core/Link";
import { Link } from "react-router-dom";
import axios from "axios";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MaterialLink component={Link} to="/" color="inherit">
        Your Website
      </MaterialLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    a: {
      textDecoration: "none",
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();
  const [data, setData] = React.useState([]);
  const [card1, setCard1] = React.useState();
  const [card2, setCard2] = React.useState();
  const [card3, setCard3] = React.useState();

  React.useEffect(() => {
    catchPokimon();
  }, []);
  var results = [];
  const catchPokimon = async () => {
    try {
      var numberOfRandoms = 3;
      var maxRange = 100;

      for (var i = 0; i < numberOfRandoms; i++) {
        var random = Math.floor(Math.random() * maxRange + 1);
        results.push(random);
      }
      setData(results);

      const res1 = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${results[0]}`
      );
      if (res1.status === 200) {
        const res2 = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${results[1]}`
        );

        if (res2.status == 200) {
          const res3 = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${results[2]}`
          );
          if (res3.status == 200) {
            setCard1(res1.data);
            setCard2(res2.data);
            setCard3(res3.data);
            console.log(res1.data);
          }
        }
      }
    } catch (error) {}
  };

  const catchIt = () => {};
  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Catch Pokemon with Ash Ketchum
            </Typography>
            {/* <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography> */}
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {card1 ? (
              <Grid item key={card1} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${data[0]}.svg`}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card1.name.charAt(0).toUpperCase() + card1.name.slice(1)}
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content!
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ) : (
              <></>
            )}

            {card2 ? (
              <Grid item key={card1} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${data[1]}.svg`}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card2.name.charAt(0).toUpperCase() + card2.name.slice(1)}
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content!
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => {
                        catchIt();
                      }}
                      size="small"
                      color="primary"
                    >
                      Catch
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ) : (
              <></>
            )}

            {card3 ? (
              <Grid item key={card1} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${data[2]}.svg`}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card3.name.charAt(0).toUpperCase() + card3.name.slice(1)}
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content!
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ) : (
              <></>
            )}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
