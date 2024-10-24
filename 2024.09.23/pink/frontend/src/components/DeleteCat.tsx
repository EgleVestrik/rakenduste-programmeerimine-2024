import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

type DeleteCatProps = {
  fetchCats: () => void;
};

const DeleteCat = ({ fetchCats }: DeleteCatProps) => {
  const [name, setName] = useState("");  

  const deleteCat = async () => {
    try {
      const response = await fetch(`http://localhost:8080/cats`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),  
      });


    } catch (error) {
      console.warn(error);
    }
  };

  const handleDelete = (event: React.FormEvent) => {
    event.preventDefault();

    deleteCat(); 
    setTimeout(fetchCats, 100);  
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <form onSubmit={handleDelete}>
        <Stack>
          <TextField
            label="Cat name"
            value={name}
            onChange={(event) => setName(event.target.value)}  
          />
          <Button type="submit">Delete Cat</Button>  {}
        </Stack>
      </form>
    </Box>
  );
};

export default DeleteCat;