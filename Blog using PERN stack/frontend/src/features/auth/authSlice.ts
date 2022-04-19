import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import authService from "./authService";

interface InitalState {
  user: object;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: InitalState = {
  user: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register User
export const register = createAsyncThunk(
  "auth/register",
  async (user: object, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {}
  }
);

// Login User
export const login = createAsyncThunk(
  "auth/login",
  async (user: object, thunkAPI) => {
    try {
      return await authService.loginUser(user);
    } catch (error) {}
  }
);

// Logout User
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

// Auth Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = {};
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = {};
      })
      .addCase(logout.pending, (state) => {
        state.user = {};
      });
  },
});
