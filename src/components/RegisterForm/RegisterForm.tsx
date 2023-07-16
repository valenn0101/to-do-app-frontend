import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

type FormType = {
  firstName: string;
  lastName: string;
  age: number | null;
  email: string;
  username: string;
  password: string;
};

const RegisterForm = () => {
  const [formData, setFormData] = useState<FormType>({
    firstName: "",
    lastName: "",
    age: null,
    email: "",
    username: "",
    password: "",
  });

  const dataForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);
  };
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "90vh", mt: 5, mb: 5 }}
    >
      <Grid item xs={3}>
        <Card sx={{ mt: 5, width: 800 }}>
          <Typography
            variant="h4"
            textAlign={"center"}
            sx={{ color: "black", mb: 2, fontStyle: "italic" }}
          >
            Create User
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                required
                variant="filled"
                placeholder="Firstname"
                type="text"
                margin="normal"
                name="firstName"
                onChange={dataForm}
              />
              <TextField
                fullWidth
                required
                variant="filled"
                placeholder="Lastname"
                rows={4}
                type="text"
                margin="normal"
                name="lastName"
                onChange={dataForm}
              />
              <TextField
                fullWidth
                required
                variant="filled"
                placeholder="Age"
                rows={4}
                type="number"
                margin="normal"
                name="age"
                onChange={dataForm}
              />
              <TextField
                fullWidth
                required
                variant="filled"
                placeholder="Email"
                rows={4}
                type="email"
                margin="normal"
                name="email"
                onChange={dataForm}
              />
              <TextField
                fullWidth
                required
                variant="filled"
                placeholder="Username"
                rows={4}
                type="text"
                margin="normal"
                name="username"
                onChange={dataForm}
              />
              <TextField
                fullWidth
                required
                variant="filled"
                placeholder="Password"
                rows={4}
                type="password"
                margin="normal"
                name="password"
                onChange={dataForm}
              />
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default RegisterForm;
