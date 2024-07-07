import React from "react";
import { Button, Grid, TextField, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  content: {
    marginLeft: 200,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}));

const InputField = ({ label }) => (
  <Grid item xs={12} md={6}>
    <TextField
      fullWidth
      id={label.toLowerCase().replace(" ", "-")}
      label={label}
      variant="outlined"
    />
  </Grid>
);

function GridText() {
  const classes = useStyles();
  const inputs = Array.from({ length: 10 }, (_, i) => `Input ${i + 1}`);

  return (
    <main className={classes.content}>
      <Grid container spacing={2}>
        {inputs.map((label, index) => (
          <InputField key={index} label={label} />
        ))}
      </Grid>
    </main>
  );
}

export default GridText;
