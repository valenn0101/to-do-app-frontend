import {
  Autocomplete,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const optionsResponsable = [
  { label: "Responsable 1", value: "responsable1" },
  { label: "Responsable 2", value: "responsable2" },
  { label: "Responsable 3", value: "responsable3" },
];

const optionsProject = [
  { label: "Project 1", value: "project1" },
  { label: "Project 2", value: "project2" },
  { label: "Project 3", value: "project3" },
];

type FormType = {
  taskName: string;
  taskDescription: string;
  responsable: string;
  project: string;
  status: string;
};

const TaskForm = () => {
  const [formData, setFormData] = useState<FormType>({
    taskName: "",
    taskDescription: "",
    responsable: "",
    project: "",
    status: "PENDING",
  });

  const dataForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAutocompleteChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
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
                name="taskName"
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
                name="taskDescription"
                onChange={dataForm}
              />
              <Autocomplete
                fullWidth
                options={optionsResponsable}
                getOptionLabel={option => option.label}
                renderInput={params => (
                  <TextField
                    {...params}
                    variant="filled"
                    placeholder="Responsable"
                    margin="normal"
                    name="responsable"
                    onChange={dataForm}
                  />
                )}
                onChange={(e, value) =>
                  handleAutocompleteChange("responsable", value?.label || "")
                }
              />
              <Autocomplete
                fullWidth
                options={optionsProject}
                getOptionLabel={option => option.label}
                renderInput={params => (
                  <TextField
                    {...params}
                    variant="filled"
                    placeholder="Project"
                    margin="normal"
                    name="project"
                    onChange={dataForm}
                  />
                )}
                onChange={(e, value) =>
                  handleAutocompleteChange("project", value?.label || "")
                }
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

export default TaskForm;
