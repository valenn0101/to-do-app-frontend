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
  name: string;
  description: string;
};

const ProjectForm = () => {
  const [formData, setFormData] = useState<FormType>({
    name: "",
    description: "",
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
    >
      <Grid item xs={3}>
        <Card sx={{ mt: 5 }}>
          <Typography
            variant="h4"
            textAlign={"center"}
            sx={{ color: "black", mb: 2, fontStyle: "italic" }}
          >
            Create Task
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                required
                variant="filled"
                placeholder="Title"
                type="text"
                margin="normal"
                name="name"
                onChange={dataForm}
              />
              <TextField
                fullWidth
                required
                multiline
                variant="filled"
                placeholder="Description"
                rows={4}
                type="text"
                margin="normal"
                name="description"
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

export default ProjectForm;
