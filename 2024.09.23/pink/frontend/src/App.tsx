import React from "react";
import "./App.css";
import Cats from "./components/Cats";
import Cats2 from "./components/Cats2";
import Todo from "./components/Todo";
import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import { Container, CssBaseline, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});


function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <React.Fragment >
      <CssBaseline />
      <Container fixed sx={{ bgcolor: '#f7a6f9'  }} >
        <Cats2 />
      </Container>
      <br></br>
      <Container fixed sx={{ bgcolor: '#A8F9A6',  }}>
        <Cats />
      </Container>
      <br></br>
      <Container fixed sx={{ bgcolor: '#D8A6F6',  }}>
        <Todo />
      </Container>
    </React.Fragment>
    </ThemeProvider>
    


      

    </>
  );
}

export default App;