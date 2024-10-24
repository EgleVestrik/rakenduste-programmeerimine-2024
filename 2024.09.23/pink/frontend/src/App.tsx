import React from "react";
import "./App.css";
import Cats from "./components/Cats";
import Cats2 from "./components/Cats2";
import Todo from "./components/Todo";
import { Container, CssBaseline } from "@mui/material";

function App() {
  return (
    <>
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
    


      

    </>
  );
}

export default App;