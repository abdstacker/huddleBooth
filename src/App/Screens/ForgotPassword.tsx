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
import { useForgot } from "../Hooks/useForgot";
import Toast from "../Components/Toast";
import { Link } from "react-router-dom";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});

export const ForgotPassword = () => {
  const [toastOpen, setToastOpen] = React.useState<boolean>(false);
  const [forgotResponse, setForgotResponse] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const { Forgot } = useForgot();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      Forgot(values.email, setToastOpen, setLoading, setForgotResponse);
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Toast
        open={toastOpen}
        setOpen={setToastOpen}
        text={
          forgotResponse
            ? "A code to reset password has been sent to your email"
            : "Email does not exist"
        }
        severity={forgotResponse ? "success" : "error"}
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
          Forgot Password
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, textTransform: "none" }}
          >
            Request for New Password
          </Button>
          {loading && (
            <Grid container justifyContent="center">
              <CircularProgress color="secondary" />
            </Grid>
          )}
          <Grid container>
            <Grid item xs>
              <Link to="/" style={{ fontSize: "0.75rem", color: "#303030" }}>
                Go back to Sign In
              </Link>
            </Grid>
            <Grid item>
              <Link
                to="/signup"
                style={{ fontSize: "0.75rem", color: "#303030" }}
              >
                Not a member? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
