import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setRestos } from "../redux/actions/restoActions";
import ComponentList from "./ComponentList";
import { useParams } from "react-router-dom";

const List = () => {
  const restoList = useSelector((state) => state.allRestos.restos.restaurants);
  const dispatch = useDispatch();
  const { id } = useParams();

  const fetchResto = async () => {
    const response = await axios
      .get("https://restaurant-api.dicoding.dev/list")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setRestos(response.data));
  };

  useEffect(() => {
    fetchResto();
  }, []);

  return (
    <div className="list">
      <Box sx={{ padding: 2, ml: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 10, mb: 6 }}>
          All Restaurants
        </Typography>
        <ComponentList />
      </Box>
    </div>
  );
};

export default List;
