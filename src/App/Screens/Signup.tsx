import * as React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  CircularProgress,
  IconButton,
  Tooltip,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import * as yup from "yup";
import { useFormik } from "formik";
import { useSignup } from "../Hooks/useSignup";
import Toast from "../Components/Toast";
import { Link, useParams, useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  username: yup
    .string()
    .min(6, "Username length should at least be 6")
    .required("Username is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
});

export const Signup = () => {
  const [toastOpen, setToastOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const { Signup } = useSignup();
  const { userType } = useParams<Readonly<string>>();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      Signup(
        values.username,
        values.email,
        values.password,
        setToastOpen,
        setLoading,
        userType
      );
    },
  });

  const token = window.localStorage.getItem("token");
  const handleSwitchAccount = () => {
    if (userType === "admin") {
      navigate("/signup/brand");
    } else if (userType === "brand") {
      navigate("/signup/customer");
    } else if (userType === "customer") {
      navigate("/signup/admin");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Toast
        open={toastOpen}
        setOpen={setToastOpen}
        text={token ? "Signup Successfully" : "Email already exists"}
        severity={token ? "success" : "error"}
      />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        color="primary.main"
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          variant="h6"
          color="secondary.main"
          textTransform="capitalize"
          marginBottom={2}
        >
          {userType}
        </Typography>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            id="username"
            label="Username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            onBlur={formik.handleBlur}
          />
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            onBlur={formik.handleBlur}
          />
          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            onBlur={formik.handleBlur}
          />
          {loading && (
            <Grid container justifyContent="center">
              <CircularProgress color="secondary" />
            </Grid>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up as {userType}
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link
                to={`/login/${userType}`}
                style={{ fontSize: "0.75rem", color: "#303030" }}
              >
                Already a member? Sign In
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Tooltip title="Switch User">
          <IconButton onClick={handleSwitchAccount}>
            <SwitchAccountIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Container>
  );
};
