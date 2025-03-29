import { Router } from "express";
import { ProjectControllers } from "./Project.controller";

const route = Router();
route.post("/create-project", ProjectControllers.CreateProject);

route.get("/get-all-projects", ProjectControllers.GetProject);

route.get("/get-single-project/:id", ProjectControllers.GetSingleProject);

route.put("/update-project/:id", ProjectControllers.UpdateProject);

route.delete("/delete-project/:id", ProjectControllers.DeleteProject);

export const ProjectRoutes = route;