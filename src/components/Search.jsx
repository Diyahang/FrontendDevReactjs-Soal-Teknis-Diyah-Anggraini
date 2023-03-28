import React from "react";
import {
  AppBar,
  Typography,
  Box,
  Toolbar,
  Button,
  FormControl,
  Radio,
  FormControlLabel,
  NativeSelect,
  Container,
} from "@mui/material";

const Search = () => {
  return (
    <div className="search">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          color="inherit"
          elevation={0}
          sx={{ border: "1px solid gray", flexGrow: 1 }}
        >
          <Container maxWidth="xl">
            <Toolbar>
              <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
                <Typography sx={{ padding: "4px", color: "gray", mt: 1.4 }}>
                  Filter By:
                </Typography>
                {/* open */}
                <FormControl>
                  <FormControlLabel
                    value="open"
                    control={<Radio />}
                    label="Open"
                    sx={{ mt: 1 }}
                  />
                </FormControl>
                {/* end open */}
                {/* price */}
                <FormControl>
                  <NativeSelect
                    defaultValue={0}
                    inputProps={{
                      name: "price",
                      id: "uncontrolled-native",
                    }}
                    sx={{
                      minWidth: 80,
                      maxWidth: 50,
                      mr: 2,
                      mt: 1.4,
                    }}
                  >
                    <option value={0} disabled>
                      Price
                    </option>
                    <option value={10}>$</option>
                    <option value={20}>$$</option>
                    <option value={30}>$$$</option>
                  </NativeSelect>
                </FormControl>
                {/* end price */}
                {/* categories */}
                <FormControl>
                  <NativeSelect
                    defaultValue={0}
                    inputProps={{
                      name: "categories",
                      id: "uncontrolled-native",
                    }}
                    sx={{
                      minWidth: 110,
                      maxWidth: 50,
                      mt: 1.4,
                    }}
                  >
                    <option value={0} disabled>
                      Categories
                    </option>
                    <option value={10}>Seafood</option>
                    <option value={20}>Fried</option>
                    <option value={30}>American</option>
                  </NativeSelect>
                </FormControl>
                {/* end categories */}
              </Box>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: 0,
                  color: "black",
                  borderColor: "black",
                  minWidth: 120,
                  maxWidth: 30,
                }}
                disabled
              >
                CLEAR ALL
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </div>
  );
};

export default Search;
