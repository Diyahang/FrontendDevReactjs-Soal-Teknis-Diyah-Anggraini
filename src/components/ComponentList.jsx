import { Circle } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ComponentList = () => {
  const restoList = useSelector((state) => state.allRestos.restos);

  const renderList = restoList.restaurants?.map((resto) => {
    restoList.restaurants?.filter((index) => index % 4 === 0);
    const { id, name, rating, pictureId, city } = resto;
    return (
      <Box key={id}>
        {/* card1 */}
        <Card sx={{ minWidth: 300, boxShadow: "none", borderRadius: 0 }}>
          <CardMedia
            component="img"
            width="140"
            height="140"
            alt={name}
            loading="lazy"
            image={`https://restaurant-api.dicoding.dev/images/medium/${pictureId}`}
          />
          <CardContent sx={{ maxWidth: 260, minHeight: 100 }}>
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
            <Stack spacing={1}>
              <Rating
                name="half-rating-read"
                defaultValue={rating}
                precision={0.5}
                readOnly
                sx={{ color: "#00004d", fontSize: "20px" }}
              />
            </Stack>
            <Box sx={{ display: "flex", mt: 1 }}>
              <Typography flexGrow={1} fontSize="12px" color="gray">
                {city} . $$$
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
          </CardContent>

          <CardActions>
            <Link to={`/detail/${id}`}>
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "#00004d",
                  borderRadius: "0",
                  minWidth: 280,
                  alignItems: "center",
                }}
              >
                LEARN MORE
              </Button>
            </Link>
          </CardActions>
        </Card>

        {/* end card */}
      </Box>
    );
  });
  return <>{renderList}</>;
};

export default ComponentList;
