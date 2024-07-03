import { Box, Container, Typography } from "@mui/material";
import "./App.css";
import ElevateAppBar from "./components/AppBar";
import PersistentDrawerLeft from "./components/Basicdrawer";

function App() {
  return (
    <div className="App">
      <PersistentDrawerLeft />
      <ElevateAppBar />
      <Box sx={{ mx: 20, my: 20 }}>
        <Typography paragraph variant="h4">
          Using App Bar.
        </Typography>
        <Typography paragraph variant="h4">
          Using Drawers.
        </Typography>
      </Box>
    </div>
  );
}

export default App;
