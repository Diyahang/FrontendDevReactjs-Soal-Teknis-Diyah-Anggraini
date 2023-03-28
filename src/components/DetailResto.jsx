import { Circle } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedResto } from "../redux/actions/restoActions";

const DetailResto = () => {
  const detail = useSelector((state) => state.allDetail);
  const { restaurant } = detail;
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(detail);

  const fetchDetailResto = async () => {
    const response = await axios
      .get(`https://restaurant-api.dicoding.dev/detail/${id}`)
      .catch((err) => {
        console.log("Err : ", err);
      });

    dispatch(selectedResto(response.data));
  };
  useEffect(() => {
    if (id && id !== "") fetchDetailResto();
  }, [id]);
  return (
    <div className="detailResto">
      <Box>
        <Container sx={{ mt: 4, alignItems: "center" }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontWeight: 600, fontSize: "30px" }}
          >
            {restaurant?.name}
          </Typography>
          <Grid container gap={2}>
            <Box
              sx={{
                minWidth: 400,
                boxShadow: "none",
                borderRadius: 0,
              }}
            >
              <CardMedia
                component="img"
                width="300"
                height="300"
                alt=""
                loading="lazy"
                image={`https://restaurant-api.dicoding.dev/images/medium/${restaurant?.pictureId}`}
              />
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  defaultValue={restaurant?.rating}
                  precision={0.5}
                  readOnly
                  sx={{ color: "#00004d", fontSize: "20px", mt: 1 }}
                />
              </Stack>
              <Box sx={{ display: "flex", mt: 1 }}>
                <Typography flexGrow={1} fontSize="12px" color="gray">
                  {restaurant?.categories[0].name} . $$$
                </Typography>
                <Circle
                  sx={{
                    color: "#2fca8f",
                    marginRight: "4px",
                    fontSize: 12,
                    marginTop: "2px",
                  }}
                />
                <Typography fontSize="12px" color="gray">
                  OPEN NOW
                </Typography>
              </Box>
            </Box>
            <Box sx={{ maxWidth: 560, minHeight: 400 }}>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ fontSize: "16px" }}
              >
                {restaurant?.description}
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                color="gray"
                sx={{ fontSize: "16px", mt: 4 }}
              >
                {restaurant?.customerReviews[0].name}
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ fontSize: "16px" }}
              >
                {restaurant?.customerReviews[0].review}
              </Typography>
            </Box>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default DetailResto;
