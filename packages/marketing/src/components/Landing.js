import React from "react";
import Button from "@material-ui/core/Button";
import { TextField, Autocomplete } from "@material-ui/core";
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
import { useState } from "react";
import DialogAction from "./DialogAction";
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
  const [show, setShow] = React.useState([]);
  const [pokemons, setPokemons] = useState([]);
  React.useEffect(() => {
    catchPokimon();
  }, []);

  const OnePokemon = async (pokemon) => {
    try {
      const url = pokemon.url;
      const res = await axios.get(url);

      if (res.status == 200) {
        return res.data;
      }
    } catch (error) {}
  };
  const catchPokimon = async () => {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10");
      if (res.status == 200) {
        const results = await Promise.all(
          res.data.results.map(async (d, i) => {
            return await OnePokemon(d, i);
          })
        );
        setPokemons(results);
        console.log(results[2], "results");
      }
    } catch (error) {}
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function getMoves(moves) {
    let m = [];
    for (let i = 0; i < 2; i++) {
      m.push(capitalizeFirstLetter(moves[i].move.name));
    }

    return m;
  }

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <DialogAction />
        <div className={classes.heroContent}>
          <Container>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Catch Pokimon with Ash Ketchum
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <img
              src={
                "https://variety.com/wp-content/uploads/2022/12/Screen-Shot-2022-12-16-at-9.31.44-AM-e1671201592808.png?w=681&h=383&crop=1&resize=681%2C383"
              }
            />
            {/* <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Link to="/pricing">
                    <Button variant="contained" color="primary">
                      Pricing
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/pricing">
                    <Button variant="outlined" color="primary">
                      Pricing
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div> */}
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {pokemons.map((pokemon, i) => (
              <Grid item key={i} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {capitalizeFirstLetter(pokemon.name)}
                    </Typography>
                    <h3>Abilities</h3>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "50% 50%",
                      }}
                    >
                      {pokemon.abilities.map((a, i) => {
                        return <div>{a.ability.name}</div>;
                      })}
                    </div>
                    <h3>Moves</h3>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "50% 50%",
                      }}
                    >
                      {getMoves(pokemon.moves).map((m, i) => {
                        return <div>{m}</div>;
                      })}
                    </div>

                    <div>Height : {pokemon.height}</div>

                    <div>Weight : {pokemon.weight}</div>
                    <div>Exp : {pokemon.base_experience}</div>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => {
                        ShowMore(true);
                      }}
                    >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
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
