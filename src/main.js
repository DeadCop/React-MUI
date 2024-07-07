import TopBar from "./components/AppBar";
import LeftBar from "./components/Basicdrawer";
import PersistentDrawerLeft from "./components/Basicdrawer";
import { Box, Container, Typography } from "@mui/material";
import VariableWidthGrid from "./components/Grid";
import GridText from "./components/Grid";

function Main() {
  return (
    <div>
      <TopBar />
      <div flexDirection="row">
        <LeftBar />
      </div>
      <GridText />
    </div>
  );
}

export default Main;
