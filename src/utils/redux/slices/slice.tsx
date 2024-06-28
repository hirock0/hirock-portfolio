"use client";
import {
  createAsyncThunk,
  createSlice,
  nanoid,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
type InitialState = {
  isLoading?: boolean;
  data: any;
  generalAndmejorprojects: any;
  isError?: boolean;
};

const initialState = {
  data: [],
  generalAndmejorprojects: [],
  isLoading: false,
  isError: false,
} as InitialState;

export const AllbackendData: any = createAsyncThunk(
  "AllbackendData",
  async (data: any) => {
    try {
      await axios.post("/pages/api/signup", data);
      const AllProjectsData = await axios.get("/pages/api/my_projects");
      const AllData = await axios.get("/pages/api/signup");
      return {
        Allprojects: AllProjectsData.data.allProjects,
        allUser: AllData.data.AllData,
        loggeduser: AllData.data.loggedUser,
      };
    } catch (error: any) {
      return undefined;
    }
  }
);

export const AllGeneralAndMejorProjectsData: any = createAsyncThunk(
  "AllGeneralAndMejorProjectsData",
  async (data: any) => {
    try {
      await axios.post("/pages/api/admin/generalAndmejorProjects", data);
      const generalAndmejorprojects = await axios.get(
        "/pages/api/admin/generalAndmejorProjects"
      );
      return { GeneralAndmejorprojects: generalAndmejorprojects.data.allGrneralAndMejorProjects};
    } catch (error: any) {
      return undefined;
    }
  }
);

export const Slices = createSlice({
  name: "data",
  initialState,
  reducers: {
    AddProjectInfo: (state: any, action: PayloadAction<any>) => {
      state.data.push(action.payload);
    },
    DeleteInfo: (state: any, action: PayloadAction<any>) => {
      state.data = state.data.filter(
        (item: any) => item.nanoId !== action.payload
      );
    },
    AddGeneralAndMejorProjects: (state: any, action: PayloadAction<any>) => {
      state.generalAndmejorprojects.push(action.payload);
    },
    DeleteGeneralAndMejorProjects: (state: any, action: PayloadAction<any>) => {
      state.generalAndmejorprojects.GeneralAndmejorprojects =
        state?.generalAndmejorprojects?.GeneralAndmejorprojects?.filter(
          (item: any) => item.nanoId !== action.payload
        );
    },
  },
  extraReducers(builder) {
    builder.addCase(
      AllbackendData.pending,
      (state: any, action: PayloadAction<any>) => {
        state.isLoading = true;
      }
    ),
      builder.addCase(
        AllbackendData.fulfilled,
        (state: any, action: PayloadAction<any>) => {
          (state.isLoading = false), (state.data = action.payload);
        }
      ),
      builder.addCase(
        AllbackendData.rejected,
        (AllbackendData.rejected,
        (state: any, action: PayloadAction<any>) => {
          state.isError = true;
        })
      );
    // addGeneral_projects

    builder.addCase(
      AllGeneralAndMejorProjectsData.pending,
      (state: any, action: PayloadAction<any>) => {
        state.isLoading = true;
      }
    );
    builder.addCase(
      AllGeneralAndMejorProjectsData.fulfilled,
      (state: any, action: PayloadAction<any>) => {
        (state.isLoading = false), (state.generalAndmejorprojects = action.payload);
      }
    ),
      builder.addCase(
        AllGeneralAndMejorProjectsData.rejected,
        (state: any, action: PayloadAction<any>) => {
          state.isError = true;
        }
      );
  },
});
export const {
  AddProjectInfo,
  DeleteInfo,
  AddGeneralAndMejorProjects,
  DeleteGeneralAndMejorProjects,
} = Slices.actions;
export default Slices.reducer;
