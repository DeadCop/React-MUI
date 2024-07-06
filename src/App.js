import { Box, Container, Typography } from "@mui/material";
import "./App.css";
import ElevateAppBar from "./components/AppBar";
import PersistentDrawerLeft from "./components/Basicdrawer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./main";

function App() {
  return (
    // <div className="App">
    //   <PersistentDrawerLeft />
    //   <ElevateAppBar />
    //   <Box sx={{ mx: 20, my: 20 }}>
    //     {/* <Typography paragraph variant="h4">
    //       Using App Bar.
    //     </Typography>
    //     <Typography paragraph variant="h4">
    //       Using Drawers.
    //     </Typography> */}
    //   </Box>
    // </div>
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
