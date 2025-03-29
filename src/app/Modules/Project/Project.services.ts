import { IProjectData } from "./Project.interface";
import { Project } from "./Project.model";
const CreateProject = async (payload: IProjectData) => {
  const response = await Project.create(payload);
  return response;
};

const GetProject = async () => {
  const response = await Project.find({});
  return response;
};

const SingleProject = async (id: string) => {
  const response = await Project.findById(id);
  return response;
};
const UpdateProject = async (id: string, payload: Partial<IProjectData>) => {
  const nonEmptyFields = Object.keys(payload).reduce((acc, field) => {
    if (payload[field] !== "" && payload[field].length > 0) {
      acc[field] = payload[field];
    }
    return acc;
  }, {} as Partial<IProjectData>);
  const response = await Project.findByIdAndUpdate(id, nonEmptyFields, {
    new: true,
    runValidators: true,
  });
  return response;
};
const DeleteProject = async (id: string) => {
  const response = await Project.findByIdAndDelete(id);
  return response;
};
export const ProjectServices = {
  CreateProject,
  GetProject,
  SingleProject,
  UpdateProject,
  DeleteProject,
};
