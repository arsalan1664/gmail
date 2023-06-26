import { createSlice } from '@reduxjs/toolkit';



export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
    sendMessageIsOpen : false
  },

  reducers: {
    openSendMessge: (state) => {
      state.sendMessageIsOpen = true
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false
    },
 
  },
 
});



export const { openSendMessge, closeSendMessage } = mailSlice.actions;
export const selectSendMessageIsOpen = (state) => state.mail.selectSendMessageIsOpen;
export default mailSlice.reducer;
