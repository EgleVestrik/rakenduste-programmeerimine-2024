import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

type SubmitCatProps = {
  fetchCats: () => void;
  id: string;  

};

const UpdateCat = ({ fetchCats, id,  }: SubmitCatProps) => {
  const [name, setName] = useState("");  

  const updateCat = async () => {
    try {
      const response = await fetch(`http://localhost:8080/cats/`, {
        method: "PUT",  
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      });

      if (response.ok) {
        console.log("Cat updated successfully", response); 
      } else {
        console.warn("Update failed");
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    updateCat();  
    setTimeout(fetchCats, 100);  
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <form onSubmit={handleSubmit}>
        <Stack>
          <TextField
            label="Cat name"
            value={name}
            onChange={(event) => setName(event.target.value)}  
          />
          <Button type="submit">Update</Button>  {}
        </Stack>
      </form>
    </Box>
  );
};

export default UpdateCat;