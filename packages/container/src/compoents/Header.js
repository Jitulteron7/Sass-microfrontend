import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
    a: {
      textDecoration: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: "#fff",
  },
  toolbar: {
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  link: {
    margin: "10px",
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

export default function Header({ isSignIn, onSignOut }) {
  const classes = useStyles();

  const onClick = () => {
    if (isSignIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <React.Fragment>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            component={RouterLink}
            to="/"
          >
            PokeCatch
          </Typography>
          <div>
            <Button
              variant="outlined"
              style={{ margin: "0 10px" }}
              className={classes.link}
              component={RouterLink}
              to={"/about"}
              onClick={onClick}
            >
              About
            </Button>
            {isSignIn ? (
              <Button
                style={{ margin: "0 10px" }}
                variant="outlined"
                className={classes.link}
                component={RouterLink}
                to={"/dashboard"}
                onClick={onClick}
              >
                DashBoard
              </Button>
            ) : (
              <></>
            )}
            <Button
              style={{ margin: "0 10px" }}
              variant="outlined"
              className={classes.link}
              component={RouterLink}
              to={isSignIn ? "/" : "/auth/signin"}
              onClick={onClick}
            >
              {isSignIn ? "Logout" : "Login"}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
