import { createSlice } from "@reduxjs/toolkit";

const initialCallState = {
  queueId: null,
  call: [],
  queue: [],
};

const callSlice = createSlice({
  name: "call",
  initialState: initialCallState,
  reducers: {
    setQueueId(state, action) {
      state.queueId = action.payload;
    },
    setCall(state, action) {
      state.call = action.payload;
    },
    setQueue(state, action) {
      state.queue = action.payload;
    },

  },
});

export const callActions = callSlice.actions;

export default callSlice.reducer;
