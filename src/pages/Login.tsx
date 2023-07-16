import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Login: React.FC = () => {
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
            <Box component="form">
              <TextField
                fullWidth
                required
                margin="normal"
                label="Email/Username"
                sx={{
                  backgroundColor: "rgba(45, 52, 54, 0.3)",
                  mt: 2,
                  mb: 1.5,
                }}
              />
              <TextField
                fullWidth
                required
                margin="normal"
                label="Password"
                sx={{
                  backgroundColor: "rgba(45, 52, 54, 0.3)",
                  mt: 1.5,
                  mb: 1.5,
                }}
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
                Register
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
