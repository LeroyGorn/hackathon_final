import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProjects } from "../../types/project.types";

const initialState: IProjects[] = [
  {
    id: 0,
    name: "",
    description: "",
    max_members: 0,
    project_stack: [],
  },
];

export const userSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    edit: (state, action: PayloadAction<IProjects[]>) => {
      state = action.payload;
      return state;
    },

    remove: (state) => {
      state = [
        { id: 0, name: "", description: "", max_members: 0, project_stack: [] },
      ];
      return state;
    },

    get: (state, action: PayloadAction<IProjects[]>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { get, edit, remove } = userSlice.actions;
export const showProjects = (state: { projects: IProjects[] }) =>
  state.projects;
export default userSlice.reducer;
