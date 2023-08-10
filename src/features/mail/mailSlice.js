import { createSlice } from '@reduxjs/toolkit';



export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
    sendMessageIsOpen : true

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
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export default mailSlice.reducer;
