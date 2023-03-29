import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Page from "../components/UI/Page";
import DeleteOulineIcon from "@mui/icons-material/DeleteOutline";
import { setData } from "../store/stock/stockActions";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const categories = useSelector((state) => state.stock.categories);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(
      setData("delete", "categories", id, navigate, "/stock/categories")
    );
  };

  return (
    <Page title="Categories" btnCaption="New Category">
      <TableContainer sx={{ alignItems: "center" }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center"> #</TableCell>
              <TableCell align="center"> Name</TableCell>
              <TableCell align="center"> Number of Products</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center"> {row.id}</TableCell>
                <TableCell align="center"> {row.name}</TableCell>
                <TableCell align="center"> {row.product_count}</TableCell>
                <TableCell>
                  <DeleteOulineIcon
                    sx={{ color: "red", cursor: "pointer" }}
                    onClick={() => handleDelete(row.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Page>
  );
};

export default Categories;
