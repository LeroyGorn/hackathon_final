import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUsersState } from "../../types/auth.types";

const initialState: IUsersState[] = [
  {
    user: { id: 0, first_name: "", last_name: "" },
    education: "",
    tech_stack: [],
    work_experience: "",
    years_experience: 0,
  },
];

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    edit: (state, action: PayloadAction<IUsersState[]>) => {
      state = action.payload;
      return state;
    },

    remove: (state) => {
      state = [
        {
          user: { id: 0, first_name: "", last_name: "" },
          education: "",
          tech_stack: [],
          work_experience: "",
          years_experience: 0,
        },
      ];
      return state;
    },

    get: (state, action: PayloadAction<IUsersState[]>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { get, edit, remove } = userSlice.actions;
export const showUsers = (state: { users: IUsersState[] }) => state.users;
export default userSlice.reducer;
