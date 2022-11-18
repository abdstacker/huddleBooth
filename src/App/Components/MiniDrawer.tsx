import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";
import List from "@mui/material/List";
import Badge from "@mui/material/Badge";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const drawerWidth = 250;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [expandChallenges, setExpandChallenges] = React.useState<boolean>(true);
  const [expandTricks, setExpandTricks] = React.useState<boolean>(true);
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(0);
  const [expandChallengesIndex, setExpandChallengesIndex] = React.useState<
    number | null
  >(null);
  const [expandTricksIndex, setExpandTricksIndex] = React.useState<
    number | null
  >(null);
  const [toolbarIndex, setToolbarIndex] = React.useState<number | null>(null);
  const handleClickExpandChallenges = () => {
    setExpandChallenges(!expandChallenges);
  };

  const handleClickExpandTricks = () => {
    setExpandTricks(!expandTricks);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setExpandChallengesIndex(null);
    setExpandTricksIndex(null);
    setToolbarIndex(null);
  };

  const handleExpandChallengesIndex = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setExpandChallengesIndex(index);
    setSelectedIndex(1);
    setExpandTricksIndex(null);
    setToolbarIndex(null);
  };

  const handleExpandTricksIndex = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setExpandTricksIndex(index);
    setExpandChallengesIndex(null);
    setSelectedIndex(2);
    setToolbarIndex(null);
  };

  const handleClickToolbar = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(null);
    setExpandChallengesIndex(null);
    setExpandTricksIndex(null);
    setToolbarIndex(index);
  };

  return (
    <>
      <CssBaseline />
      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{ style: { border: "none" } }}
      >
        <DrawerHeader>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              ...(open && { display: "none" }),
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            sx={{ ...(!open && { display: "none" }), color: "inherit" }}
            onClick={handleDrawerClose}
          >
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider variant="middle" color="#fff" />
        <List>
          {["Home", "Challenges", "Submitted Tricks", "Leaderboard"].map(
            (text, index) => (
              <ListItem
                key={text}
                disablePadding
                sx={{
                  display: "block",
                }}
              >
                <ListItemButton
                  sx={{
                    maxHeight: 42,
                    justifyContent: open ? "initial" : "center",
                    my: 1,
                    mx: 1,
                    backgroundColor: "secondary.dark",
                    ...(selectedIndex === index && { color: "common.black" }),
                  }}
                  selected={selectedIndex === index}
                  onClick={(event) => {
                    handleListItemClick(event, index);
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : "auto",
                      justifyContent: "center",
                      ...(selectedIndex === index && {
                        color: "common.black",
                      }),
                    }}
                  >
                    {index === 0 && <HomeOutlinedIcon />}
                    {index === 1 && <LeaderboardOutlinedIcon />}
                    {index === 2 && <PlayCircleFilledWhiteOutlinedIcon />}
                    {index === 3 && <EmojiEventsOutlinedIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                  <ListItemIcon
                    onClick={(event) => {
                      index === 1 && handleClickExpandChallenges();
                      index === 2 && handleClickExpandTricks();
                    }}
                    sx={{
                      minWidth: 0,
                      mr: open ? -1 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index === 1 &&
                      open &&
                      (expandChallenges ? <ExpandLess /> : <ExpandMore />)}
                    {index === 2 &&
                      open &&
                      (expandTricks ? <ExpandLess /> : <ExpandMore />)}
                  </ListItemIcon>
                </ListItemButton>

                {index === 1 && (
                  <Collapse in={expandChallenges} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {["Past", "Current", "Incoming"].map((text, index) => (
                        <ListItemButton
                          sx={{
                            maxHeight: 35,
                            display: open ? "flex" : "none",
                            ml: 4,
                            mr: 2,

                            ...(expandChallengesIndex === index && {
                              color: "common.black",
                            }),
                          }}
                          selected={expandChallengesIndex === index}
                          onClick={(event) => {
                            handleExpandChallengesIndex(event, index);
                          }}
                        >
                          <ListItemText primary={text} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}

                {index === 2 && (
                  <Collapse in={expandTricks} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton
                        sx={{
                          maxHeight: 35,
                          display: open ? "flex" : "none",
                          ml: 4,
                          mr: 2,
                        }}
                        onClick={(event) => {
                          handleExpandTricksIndex(event, 1);
                        }}
                        selected={expandTricksIndex === 1}
                      >
                        <ListItemText primary={"Recently"} />
                      </ListItemButton>
                    </List>
                  </Collapse>
                )}
              </ListItem>
            )
          )}
        </List>

        <List
          sx={{
            display: open ? "flex" : "  none",
            flexDirection: "row",
            borderRadius: "8px",
            backgroundColor: "secondary.dark",
            px: 2.5,
            py: 1,
            mt: "auto",
            mb: 3,
            mx: 2,
          }}
        >
          {[
            { name: "Settings", count: 0 },
            { name: "Notifications", count: 12 },
            { name: "Messages", count: 4 },
          ].map((value, index) => (
            <ListItem
              disablePadding
              selected={toolbarIndex === index}
              sx={{
                ...(toolbarIndex === index && {
                  color: "common.black",
                }),
              }}
            >
              <IconButton
                sx={{ marginLeft: "auto", marginRight: "auto" }}
                size="large"
                color="inherit"
                onClick={(event) => {
                  handleClickToolbar(event, index);
                }}
              >
                {index === 0 && <SettingsOutlinedIcon />}
                <Badge badgeContent={value.count} color="error">
                  {index === 1 && <NotificationsNoneOutlinedIcon />}
                  {index === 2 && <ForumOutlinedIcon />}
                </Badge>
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
