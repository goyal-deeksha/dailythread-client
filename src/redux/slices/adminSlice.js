import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
  userLoading: false,
};

export const userSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    getAllEmployees: (state, action) => {
      state.employees = action.payload;
    },
    setUserLoading: () => {
      state.userLoading = action.payload;
    },
  },
});

export const { setUser, setUserLoading } = userSlice.actions;

export default userSlice.reducer;
