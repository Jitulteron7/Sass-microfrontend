import * as React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { Box, ThemeProvider } from "@material-ui/core";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import Lottie from "lottie-react";
import PokeBall from "./pokeball.json";
import { v4 as uuidv4 } from "uuid";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogAction({
  show,
  setShow,
  pokeInfo,
  setPokeInfo,
  capitalizeFirstLetter,
}) {
  const [confet, setConfet] = React.useState(false);
  const [pokeball, setPokeball] = React.useState(false);
  const [catchIt, setCatchIt] = React.useState(false);

  return (
    <div>
      <Dialog disableEscapeKeyDown open={show}>
        {confet ? (
          <Confetti style={{ height: "100%", width: "100%" }} />
        ) : (
          <></>
        )}

        <DialogTitle
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "1.2rem",
            fontWeight: "700",
          }}
        >
          {capitalizeFirstLetter(pokeInfo?.name)}
        </DialogTitle>

        <DialogContent>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "10px",
              paddingBottom: "10px",
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "0.9rem",
              width: "510px",
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
          >
            <div style={{ width: "100%", margin: "0 auto" }}>
              {!pokeball ? (
                <div>
                  <img
                    style={{ width: "100%" }}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeInfo?.id}.png`}
                  />
                  {catchIt ? (
                    <center>
                      <h1>Congratulations</h1>
                    </center>
                  ) : (
                    <></>
                  )}
                </div>
              ) : (
                <Lottie animationData={PokeBall} loop={true} />
              )}
            </div>
            <div style={{ margin: "10px auto" }}></div>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            style={{
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "0.8rem",
              color: "rgb(166, 0, 113)",
            }}
            onClick={() => {
              setShow(false);
              setPokeInfo(null);
              setConfet(false);
              setCatchIt(false);
            }}
          >
            Close
          </Button>
          <Button
            style={{
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "0.8rem",
              color: "rgb(166, 0, 113)",
            }}
            onClick={() => {
              setPokeball(true);
              setTimeout(function () {
                setConfet(true);
                setPokeball(false);
                setCatchIt(true);
                let catches = JSON.parse(localStorage.getItem("catches"))
                  ? JSON.parse(localStorage.getItem("catches"))
                  : [];
                catches.push({ no: uuidv4(), ...pokeInfo });
                localStorage.setItem("catches", JSON.stringify(catches));
              }, 5000);
            }}
          >
            Catch
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
