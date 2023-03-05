import { configureStore } from "@reduxjs/toolkit";
import projectsSlice from "../slices/projects-slice";
import userSlice from "../slices/user-slice";
import usersSlice from "../slices/users-slice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    user: userSlice,
    projects: projectsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
