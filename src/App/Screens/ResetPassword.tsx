import React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
  FormHelperText,
  InputLabel,
  Grid,
  Box,
  Typography,
  Container,
  CircularProgress,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as yup from "yup";
import { useFormik } from "formik";
import { useResetPassword } from "../Hooks/useResetPassword";
import Toast from "../Components/Toast";
import { Link, useParams } from "react-router-dom";

const validationSchema = yup.object({
  code: yup.string().required("Code is required"),
  password: yup
    .string()
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Please Re-Enter Password")
    .oneOf([yup.ref("password")], "Passwords do not match"),
});

export const ResetPassword = () => {
  const [toastOpen, setToastOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [resetResponse, setResetResponse] = React.useState<number | null>(0);
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    React.useState<boolean>(false);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const { userType } = useParams<Readonly<string>>();
  const { ResetPassword } = useResetPassword();
  const formik = useFormik({
    initialValues: {
      code: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      ResetPassword(
        values.code,
        values.password,
        setToastOpen,
        setLoading,
        setResetResponse,
        userType
      );
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Toast
        open={toastOpen}
        setOpen={setToastOpen}
        text={
          resetResponse === 204
            ? "Password changed Successfully"
            : "Code is Invalid"
        }
        severity={resetResponse === 204 ? "success" : "error"}
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
          Reset Password
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            id="code"
            label="Enter code sent to you via email"
            name="code"
            value={formik.values.code}
            onChange={formik.handleChange}
            error={formik.touched.code && Boolean(formik.errors.code)}
            helperText={formik.touched.code && formik.errors.code}
            onBlur={formik.handleBlur}
          />
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              New Password
            </InputLabel>
            <OutlinedInput
              fullWidth
              id="password"
              name="password"
              label="New Password"
              type={showPassword ? "text" : "password"}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              onBlur={formik.handleBlur}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText error>
              {formik.touched.password && formik.errors.password}
            </FormHelperText>
          </FormControl>

          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel>Confirm New Password</InputLabel>
            <OutlinedInput
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm New Password"
              type={showConfirmPassword ? "text" : "password"}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              onBlur={formik.handleBlur}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => {
                      setShowConfirmPassword(!showConfirmPassword);
                    }}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText error>
              {formik.touched.confirmPassword && formik.errors.confirmPassword}
            </FormHelperText>
          </FormControl>
          {loading && (
            <Grid container justifyContent="center">
              <CircularProgress color="secondary" />
            </Grid>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, textTransform: "none" }}
          >
            Change Password
          </Button>

          <Grid container>
            <Grid item xs>
              <Link
                to={`/login/${userType}`}
                style={{ fontSize: "0.75rem", color: "#303030" }}
              >
                Go back to Sign In
              </Link>
            </Grid>
            <Grid item>
              <Link
                to={`/signup/${userType}`}
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
