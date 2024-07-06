import TopBar from "./components/AppBar";
import LeftBar from "./components/Basicdrawer";
import PersistentDrawerLeft from "./components/Basicdrawer";
import { Box, Container, Typography } from "@mui/material";

function Main() {
  return (
    <div>
      <TopBar />
      <LeftBar />
    </div>
  );
}

export default Main;
