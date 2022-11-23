export const feedContainer = {
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
};
