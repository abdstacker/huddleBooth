import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { feedContainer } from "../../Styles/Styles";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Divider,
  Card,
  CardMedia,
  Avatar,
  Button,
} from "@mui/material";
import Slider from "react-slick";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "190px",
  slidesToShow: 1,
  speed: 400,
};

export const Feed = () => {
  const { userType } = useParams<Readonly<string>>();

  return (
    <>
      <Container sx={feedContainer}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }} ml="40px">
          Home
        </Typography>
        <Divider color="9e9e9e" sx={{ my: 2 }} />

        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6].map((data, index) => (
            <Box sx={{ px: "2rem" }} key={data}>
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
                  {userType === "customer" && (
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
                  )}
                </Box>
              </Card>
            </Box>
          ))}
        </Slider>
      </Container>
    </>
  );
};
