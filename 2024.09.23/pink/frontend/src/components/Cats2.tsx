import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SubmitCat from "./SubmitCat";
import DeleteCat from "./DeleteCat";

type Cat = {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Cats2 = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  const fetchCats = async () => {
    const response = await fetch("http://localhost:8080/cats");
    const data = await response.json();

    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <Box>
      <Typography variant="h3" >
        Cats
      </Typography>

      <TableContainer >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Updated At</TableCell>
              <TableCell>Deleted</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cats.map((cat) => (
              <TableRow key={cat.id}>
                <TableCell>{cat.id}</TableCell>
                <TableCell>{cat.name}</TableCell>
                <TableCell>{new Date(cat.createdAt).toDateString()}</TableCell>
                <TableCell>
                  {cat.updatedAt}
                </TableCell>
                <TableCell>{cat.deleted}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br></br>
      <SubmitCat fetchCats={fetchCats} />
      <DeleteCat fetchCats={fetchCats} />
    </Box>
  );
};

export default Cats2;