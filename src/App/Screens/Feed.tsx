import * as React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MiniDrawer from "../Components/MiniDrawer";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import {
  Box,
  Typography,
  Container,
  Divider,
  CardMedia,
  Card,
  Avatar,
  Button,
} from "@mui/material";
import Slider from "react-slick";

export const Feed = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "190px",
    slidesToShow: 1,
    speed: 400,
  };

  return (
    <>
      <Box
        component="main"
        sx={{
          display: "flex",
          flexGrow: 1,
          overflow: "hidden !important",
          position: "fixed",
        }}
      >
        <MiniDrawer></MiniDrawer>

        <Container
          sx={{
            display: "block",
            width: "100%",
            mx: "auto",
            my: "10px",
            "& .slick-arrow": {
              backgroundColor: "#303030",
              color: "#f9c712",
              height: "40px",
              width: "40px",
              pt: "3px",
              borderRadius: "25px",
              // "&:hover": { backgroundColor: "#f9c712", color: "#303030" },
            },
            "& .slick-prev": {
              marginLeft: "195px",
              top: "25%",
              zIndex: "1",
            },
            "& .slick-next": { marginRight: "193px", top: "25%", zIndex: "1" },
            "& .slick-prev:before, .slick-next:before": {
              color: "primary.main",
            },
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }} ml="40px">
            Home
          </Typography>
          <Divider color="9e9e9e" sx={{ my: 2 }} />

          <Slider {...settings}>
            {[1, 2, 3, 4, 5, 6].map((data, index) => (
              <Box sx={{ px: "2rem" }}>
                <Card sx={{ borderRadius: 0 }}>
                  <CardMedia
                    component="img"
                    alt="challengeImg"
                    height="490px"
                    image="https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  ></CardMedia>
                  <Box
                    sx={{
                      position: "absolute",
                      zIndex: "1",
                      marginTop: "-8rem",
                      marginLeft: "20px",
                    }}
                  >
                    <Typography color="#fff" sx={{ fontWeight: "bold" }}>
                      Pepsi Swag Challenge
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                        my: 1,
                      }}
                    >
                      <Avatar
                        sx={{ width: 30, height: 30, mr: 1 }}
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                      <Typography color="#fff">John</Typography>
                    </Box>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#e9605f",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "red",
                        },
                      }}
                    >
                      <FavoriteBorderOutlinedIcon sx={{ mr: 1 }} />
                      Liked
                    </Button>
                  </Box>
                </Card>
              </Box>
            ))}
          </Slider>
        </Container>
      </Box>
    </>
  );
};
