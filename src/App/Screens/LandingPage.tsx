import * as React from "react";
import MiniDrawer from "../Components/MiniDrawer";
import { Feed } from "./Feed";
import { Box } from "@mui/material";
import { AdminHome } from "./AdminHome";
import { Challenges } from "./Challenges";
import { useParams, useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);
  const { userType, screen } = useParams<Readonly<string>>();
  const navigate = useNavigate();
  const authUser = window.localStorage.getItem("authUser");
  const renderScreenFromUrl = () => {
    if (authUser !== userType) {
      navigate("/404");
    }

    switch (screen) {
      case "feed":
        setSelectedIndex(0);
        break;
      case "challenges":
        setSelectedIndex(1);
        break;

      default:
        setSelectedIndex(null);
    }
  };

  React.useEffect(() => {
    renderScreenFromUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const renderSwitch = (drawerIndex: number | null) => {
    switch (selectedIndex) {
      case 0:
        if (userType === "admin") return <AdminHome />;
        else return <Feed />;
      case 1:
        return <Challenges />;
      case 2:
        return <h1>Submitted Tracks</h1>;
      case 3:
        return <h1>LeaderBoard</h1>;
      // default:
      //   return <h4>no drawer index matched</h4>;
    }
  };

  console.log("selected index", selectedIndex);
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexGrow: 1,
        position: "fixed",
        width: "100%",
        height: "100%",
      }}
    >
      <MiniDrawer
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      ></MiniDrawer>
      {renderSwitch(selectedIndex)}
    </Box>
  );
};
