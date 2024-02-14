import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
  "filter/fetchData",
  async (arg, thunkAPI) => {
    try {
      const response = await axios.get(arg);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const initialState = {
  dataPizza: [],
  lodingStatus: 'failed',

};
const PizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setpizza(state, action) {
      return {
        ...state,
        dataPizza: action.payload,
        lodingStatus: true,
      };
    },
    setLoading(state, action) {
      return {
        ...state,

        lodingStatus: false,
      };
    },
   
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchData.pending, (state) => {
        state.lodingStatus = "pending";
      })

      .addCase(fetchData.fulfilled, (state, action) => {
        state.lodingStatus = "succeeded";
        state.dataPizza=action.payload
      })

      .addCase(fetchData.rejected, (state, action) => {
        state.lodingStatus = "failed";
        state.dataPizza=[]
        // state.error = action.payload.error;
      })
  },
});

export const { setpizza, setLoading } = PizzaSlice.actions;
export default PizzaSlice.reducer;
