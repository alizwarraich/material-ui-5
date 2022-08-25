import React from "react";
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import Feed from './components/Feed'
import Navbar from './components/Navbar'
import { Box, Stack } from "@mui/system";
import Add from "./components/Add";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const [mode, setMode] = React.useState(false)
  const darkTheme = createTheme({
    palette: {
      mode: mode ? 'dark' : 'light'
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="background.default" color="text.primary">
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-evenly">
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
