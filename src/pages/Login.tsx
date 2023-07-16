import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

type LoginType = {
  username: string;
  password: string;
};

const Login: React.FC = () => {
  const [loginData, setLoginData] = useState<LoginType>({
    username: "",
    password: "",
  });

  const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(loginData);
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ minHeight: "90vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography
              variant="h4"
              sx={{ color: "black", mb: 2, fontStyle: "italic" }}
            >
              Welcome to Todo App
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                required
                name="username"
                type="text"
                margin="normal"
                label="Email/Username"
                sx={{
                  backgroundColor: "rgba(45, 52, 54, 0.3)",
                  mt: 2,
                  mb: 1.5,
                }}
                onChange={dataLogin}
              />
              <TextField
                fullWidth
                required
                name="password"
                type="password"
                margin="normal"
                label="Password"
                sx={{
                  backgroundColor: "rgba(45, 52, 54, 0.3)",
                  mt: 1.5,
                  mb: 1.5,
                }}
                onChange={dataLogin}
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 1.5, mb: 1.5 }}
              >
                Login
              </Button>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 1.5, mb: 3 }}
              >
                <Link to="/register">Register</Link>
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
