import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    empDocId: null,
    about: "",
    empName: "",
    empContactNo: "",
    experiance: "",
    qualification: "",
    skills: "",
    linkedinUrl: "",
    instagramUrl: "",
    facebookUrl: "",
  },
  userDataLoading: false,
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    getUserData: (state, action) => {
      state.userData = action.payload;
    },
    userDataLoading: () => {
      state.userDataLoading = action.payload;
    },
  },
});

export const { getUserData, userDataLoading } = userDataSlice.actions;

// console.log("userDataSlice", userDataSlice);

export default userDataSlice.reducer;
