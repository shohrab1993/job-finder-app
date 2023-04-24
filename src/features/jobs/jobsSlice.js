import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getAllJobs, {
  deleteJob,
  getSinglejob,
  postJob,
  updateJob,
} from "./jobsApi";
const initialState = {
  jobs: [],
  isLoading: false,
  isError: false,
  error: "",
  job: {},
  type: {},
  search: [],
};

// async thunks

export const fetchAllJobs = createAsyncThunk(
  "jobs/fetchAllJobs",
  async (type) => {
    const jobs = await getAllJobs(type);
    return jobs;
  }
);
export const fetchSingleJob = createAsyncThunk(
  "jobs/fetchSingleJob",
  async (id) => {
    const job = await getSinglejob(id);
    return job;
  }
);

export const createJob = createAsyncThunk("jobs/createjob", async (data) => {
  const job = await postJob(data);
  return job;
});

export const changeJobs = createAsyncThunk(
  "jobs/changeJobs",
  async ({ id, data }) => {
    const jobs = await updateJob(id, data);
    return jobs;
  }
);

export const removeJob = createAsyncThunk("jobs/removejob", async (id) => {
  const job = await deleteJob(id);
  return job;
});

//slice

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    addType: (state, action) => {
      state.type = action.payload;
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllJobs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchAllJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = action.payload.jobs;
      })
      .addCase(fetchAllJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.jobs = [];
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(fetchSingleJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchSingleJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.job = action.payload.jobs;
      })
      .addCase(fetchSingleJob.rejected, (state, action) => {
        state.isLoading = false;
        state.job = [];
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(changeJobs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(changeJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = action.payload.jobs;
      })
      .addCase(changeJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.jobs = [];
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(removeJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(removeJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = state.jobs?.filter(
          (job) => job._id !== action.payload.jobs
        );
      })
      .addCase(removeJob.rejected, (state, action) => {
        state.isLoading = false;
        state.jobs = [];
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(createJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = action.payload.jobs;
      })
      .addCase(createJob.rejected, (state, action) => {
        state.isLoading = false;
        state.jobs = [];
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export const { addType, searched } = jobsSlice.actions;
export default jobsSlice.reducer;
