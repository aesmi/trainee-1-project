import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { flexbox } from "@mui/system";

export default function WeatherPopupBox() {
  const [open, setOpen] = useState(false);
  // need to change (out of this component)
  // need to check valid city
  const [city, setCity] = useState("Sydney");
  const [changedCity, setChangedCity] = useState("");

  const handleSubmit = () => {
    setOpen(false);
    setCity(changedCity);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
      }}
    >
      {city}
      <br />
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Change city
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Change city</DialogTitle>
        <DialogContent>
          <DialogContentText>Choose a city</DialogContentText>
          <TextField
            autoFocus
            id="outlined-basic"
            margin="dense"
            label="City"
            fullWidth
            onChange={(e) => setChangedCity(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit}>Change</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
