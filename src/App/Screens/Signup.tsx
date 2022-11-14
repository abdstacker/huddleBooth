import React from "react";
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
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import * as yup from "yup";
import { useFormik } from "formik";
import { useSignup } from "../Hooks/useSignup";
import Toast from "../Components/Toast";
import { useNavigate } from "react-router-dom";

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
        setLoading
      );
    },
  });

  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");
  const handleLinkSignin = () => {
    navigate("/");
  };
  const handleLinkForgotPassword = () => {};

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
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            onBlur={formik.handleBlur}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            onBlur={formik.handleBlur}
          />
          <TextField
            margin="normal"
            required
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
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs>
              <Typography
                sx={{ cursor: "pointer", textDecoration: "underline" }}
                color="secondary"
                variant="body2"
                onClick={handleLinkForgotPassword}
              >
                Forgot password?
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{ cursor: "pointer", textDecoration: "underline" }}
                color="secondary"
                variant="subtitle2"
                onClick={handleLinkSignin}
              >
                {"Already a member? Signin instead"}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
