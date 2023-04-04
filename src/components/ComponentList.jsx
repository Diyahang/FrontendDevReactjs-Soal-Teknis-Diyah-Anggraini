import { Circle } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Rating,
  Stack,
  Typography,
  Link,
} from "@mui/material";
import { useSelector } from "react-redux";
import { slice } from "lodash";
import { useState } from "react";

const ComponentList = () => {
  const restoList = useSelector((state) => state.allRestos.restos.restaurants);
  const [index, setIndex] = useState(8);
  const [isCompleted, setIsCompleted] = useState(false);
  const initialPosts = slice(restoList, 0, index);

  const loadMore = () => {
    setIndex(index + 8);
    if (index >= restoList.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };

  const renderList = initialPosts.map((resto) => {
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
            <Link href={`/detail/${id}`} underline="none">
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

  return (
    <>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 6, sm: 8, md: 12 }}
          gap={2}
        >
          {renderList}
        </Grid>
      </Container>
      <Box sx={{ mt: 4, textAlign: "center" }}>
        {isCompleted ? (
          <Button
            onClick={loadMore}
            disabled
            variant="outlined"
            sx={{
              borderRadius: 0,
              color: "#00004d",
              borderColor: "#00004d",
              minWidth: 320,
              maxWidth: 120,
            }}
          >
            LOAD MORE
          </Button>
        ) : (
          <Button
            onClick={loadMore}
            variant="outlined"
            sx={{
              borderRadius: 0,
              color: "#00004d",
              borderColor: "#00004d",
              minWidth: 320,
              maxWidth: 120,
            }}
          >
            LOAD MORE
          </Button>
        )}
      </Box>
    </>
  );
};

export default ComponentList;
