import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import articleService from "./articleService";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  created_at: string;
  updated_at: string;
}

interface InitialState {
  article: Article[];
  articles: Article[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: InitialState = {
  article: [],
  articles: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const showAllArticle = createAsyncThunk(
  "articles/show",
  async (_, thunkAPI) => {
    try {
      return await articleService.showAllArticle();
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(showAllArticle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        showAllArticle.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.article = action.payload;
        }
      )
      .addCase(showAllArticle.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = articleSlice.actions;

export default articleSlice.reducer;
