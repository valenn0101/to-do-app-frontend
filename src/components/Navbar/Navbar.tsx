import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }} color="transparent">
      <AppBar position="static" color="transparent">
        <Container>
          <Toolbar>
            <Typography sx={{ flexGrow: 1 }} variant="h6">
              <Link
                to={"/home"}
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                TodoApp
              </Link>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ margin: 1 }}
              onClick={() => navigate("/new-task")}
            >
              New Task
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{ margin: 1 }}
              onClick={() => navigate("/new-project")}
            >
              New Project
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => navigate("/")}
            >
              Log out
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
