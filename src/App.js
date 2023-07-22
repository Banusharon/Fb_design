import Rightbar from "./Rightbar";
import Sidebar from "./Sidebar";
import Feed from "./Feed"
import { Stack } from "@mui/system";
import {Box} from "@mui/system"
import Navbar from "./Navbar";
// import { Add } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Add from "./Add";
 

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette:{
      mode: mode
    }
  })
  return (

    <ThemeProvider theme={darkTheme}> 
    <Box bgcolor={"background.default"} color={"text.primary" }>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar setMode={setMode} mode={mode}/>
      <Feed/>
      <Rightbar/> 
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  )
}

export default App;
