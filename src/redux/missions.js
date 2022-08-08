/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadMission = createAsyncThunk('missions/loaded', async () => fetch('https://api.spacexdata.com/v3/missions').then((res) => res.json()));

const missiontSlice = createSlice({
  name: 'mission',
  initialState: {
    pending: false,
    failed: false,
    missions: [],
  },
  reducers: {
    reserveMission(state, action) {
      const newMissionState = state.missions.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, reserved: action.payload.reserved };
        }
        return item;
      });
      return { ...state, missions: newMissionState };
    },
  },
  extraReducers: {
    [loadMission.pending]: (state) => {
      state.pending = true;
    },
    [loadMission.fulfilled]: (state, action) => {
      state.pending = false;
      state.missions = action.payload.map((mission) => ({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
        reserved: false,
      }));
    },
    [loadMission.rejected]: (state) => {
      state.failed = true;
    },
  },
});

export const { reserveMission } = missiontSlice.actions;
export default missiontSlice.reducer;
