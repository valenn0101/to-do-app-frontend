import React from "react";

import Navbar from "@/components/Navbar/Navbar";
import TasksForm from "@/components/TasksForm/TasksForm";

function CreateTask() {
  return (
    <>
      <Navbar />
      <TasksForm />
    </>
  );
}

export default CreateTask;
