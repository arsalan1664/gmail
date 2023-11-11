import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
    sendMessageIsOpen : false,
    selectMail : null
  },

  reducers: {
    selectMail: (state, action) => {
      state.selectMail = action.payload;
    },
    openSendMessge: (state) => {
      state.sendMessageIsOpen = true
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false
    },
  },
});

export const {selectMail, openSendMessge, closeSendMessage } = mailSlice.actions;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectOpenMail = (state) => state.mail.selectMail;
export default mailSlice.reducer;

