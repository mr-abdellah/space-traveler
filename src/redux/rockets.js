/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadRockets = createAsyncThunk('rockets/loaded', async () => fetch('https://api.spacexdata.com/v3/rockets').then((res) => res.json()));

const rocketSlice = createSlice({
  name: 'rocket',
  initialState: {
    pending: false,
    failed: false,
    rockets: [],
  },
  reducers: {
    reserveRocket(state, action) {
      const newState = state.rockets.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, reserved: action.payload.reserved };
        }
        return item;
      });
      return { ...state, rockets: newState };
    },
  },
  extraReducers: {
    [loadRockets.pending]: (state) => {
      state.pending = true;
    },
    [loadRockets.fulfilled]: (state, action) => {
      state.pending = false;
      state.rockets = action.payload.map((rocket) => ({
        id: rocket.id,
        rocket_name: rocket.rocket_name,
        description: rocket.description,
        flickr_images: rocket.flickr_images,
        reserved: false,
      }));
    },
    [loadRockets.rejected]: (state) => {
      state.failed = true;
    },
  },
});

export const { reserveRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
