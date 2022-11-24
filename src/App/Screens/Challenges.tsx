import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Divider,
  Container,
  ListItemButton,
  ListItemText,
  List,
  ListItem,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
export const Challenges = () => {
  const [challengesTypeIndex, setChallengesTypeIndex] =
    React.useState<number>(0);
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate("/landingPage/admin/challenges");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChallengesType = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setChallengesTypeIndex(index);
  };
  return (
    <Container sx={{ m: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", width: "fit-content" }}>
        <Typography variant="h5" sx={{ mr: 1.5 }}>
          Challenges by Brand
        </Typography>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ borderColor: "secondary.main" }}
        />
        <Typography
          variant="body2"
          sx={{ m: 1.5, color: "secondary.main", cursor: "pointer" }}
        >
          View All Brands
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "secondary.light",
          border: 1,
          p: 1,
          borderRadius: "5px",
        }}
      >
        <List
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            width: "700px",
          }}
          disablePadding
        >
          {[
            { name: "Past Challenges", id: 0 },
            { name: "Current Challenges", id: 1 },
            { name: "Upcoming Challenges", id: 2 },
          ].map((value, index) => (
            <>
              <ListItem sx={{ m: 0, width: "28%" }}>
                <ListItemButton
                  alignItems="center"
                  key={value.id}
                  sx={{
                    maxHeight: 35,
                    border: challengesTypeIndex === index ? 0 : 1,
                    borderColor: "secondary.dark",
                    "&:hover": { backgroundColor: "unset" },
                  }}
                  selected={challengesTypeIndex === index}
                  onClick={(event) => {
                    handleChallengesType(event, index);
                  }}
                >
                  <ListItemText
                    sx={{
                      justifyContent: "center",
                      display: "flex",
                      fontSize: "80%",
                      p: 0,
                    }}
                    disableTypography
                    primary={value.name}
                  />
                </ListItemButton>
              </ListItem>
              {index < 2 && (
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ borderColor: "secondary.main" }}
                />
              )}
            </>
          ))}
        </List>
      </Box>
      <Container>
        <Card sx={{ maxWidth: 300, position: "relative" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            image="https://images.unsplash.com/photo-1596803244535-925769f389fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
          <CardContent sx={{ position: "absolute", top: "20%" }}>
            <Typography gutterBottom variant="h6" color="#fff">
              7Up Masala Challenge
            </Typography>
            <Typography variant="body2" color="#fff"></Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Container>
    </Container>
  );
};
