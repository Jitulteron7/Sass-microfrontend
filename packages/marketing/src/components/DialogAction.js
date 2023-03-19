import * as React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogAction({ handleActionOpen, action }) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog disableEscapeKeyDown open={showAddOrgDialog}>
        <DialogTitle
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: "1.2rem",
            fontWeight: "700",
          }}
        >
          Add Organization
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
            <ThemeProvider theme={theme}>
              <div
                style={{
                  height: "200px",
                  width: "500px",
                  marginBottom: "25px",
                  borderRadius: "5px",
                  border: "1px solid black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => inputFile.current.click()}
              ></div>
            </ThemeProvider>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            style={{
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "0.8rem",
              color: "rgb(166, 0, 113)",
            }}
            onClick={addOrganization}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
