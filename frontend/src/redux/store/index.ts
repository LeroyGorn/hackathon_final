import { configureStore } from "@reduxjs/toolkit";
import projectsSlice from "../slices/projects-slice";
import userSlice from "../slices/user-slice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    projects: projectsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
