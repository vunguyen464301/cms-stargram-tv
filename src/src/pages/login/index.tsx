import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as Yup from "yup";
import { useFormik } from "formik";
import { LoginRequest } from "../../services/reducers/auth/types";
import { useLoginAuthMutation } from "../../services/reducers/auth/api";
import { useEffect, useState } from "react";
import useIsMounted from "../../hooks/useIsMounted";
import { Snackbar } from "@mui/material";
import { Response } from "../../services/reducers/global/type";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { LoadingButton } from "@mui/lab";
import { useAppDispatch } from "../../services/store";
import { useNavigate } from "react-router-dom";
import { setAccessToken } from "../../services/reducers/auth";
import { Role } from "../../utils/constants.ts";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const initialValues: LoginRequest = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Required").email("Email is invalid"),
  password: Yup.string()
    .required("Required")
    .min(6, "Password must be at least 6 characters long"),
});

const LoginPage = (): JSX.Element => {
  const isMounted = useIsMounted();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [loginAuth, loginResponse] = useLoginAuthMutation();
  const [notification, setNotification] = useState<{
    visible: boolean;
    title?: string;
  }>({ visible: false });

  const { handleSubmit, errors, getFieldProps } = useFormik({
    initialValues,
    onSubmit: (values) => {
      onSubmit(values);
    },
    validationSchema,
  });

  useEffect(() => {
    if (!isMounted) return;
    if (!loginResponse.isSuccess) return;

    if (
      loginResponse.data.data.user.roles
        .map((role) => role.role)
        .includes(Role.ADMIN)
    ) {
      dispatch(setAccessToken(loginResponse.data.data.accessToken));

      navigate("/home");
    } else {
      setNotification({
        visible: true,
        title: "You are not admin !",
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginResponse.isSuccess]);

  useEffect(() => {
    if (!isMounted) return;
    if (!loginResponse.error) return;

    const loginResponseError = loginResponse.error as
      | Response<null>
      | undefined;

    setNotification({
      title: loginResponseError?.message,
      visible: true,
    });
  }, [isMounted, loginResponse.error]);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setNotification({ visible: false });
  };

  const onSubmit = async (values: LoginRequest) => {
    await loginAuth(values);
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={notification.visible}
        // onClose={handleClose}
        message={notification.title}
        action={action}
      />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              autoComplete="email"
              autoFocus
              error={Boolean(errors.email)}
              helperText={errors.email}
              {...getFieldProps("email")}
              disabled={loginResponse.isLoading}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={Boolean(errors.password)}
              helperText={errors.password}
              {...getFieldProps("password")}
              disabled={loginResponse.isLoading}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loginResponse.isLoading}
              loading={loginResponse.isLoading}
            >
              Sign In
            </LoadingButton>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                {/* <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link> */}
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;
