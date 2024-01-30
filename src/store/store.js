import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    //todo:add more slices here for posts
  },
});

export default store;
