import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: false,
  data: false,
  name: null,
}

const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => ({
      ...state,
      data: action.payload?.data,
      name: action.payload.name,
      open: true,
    }),
    closeModal: (state) => ({
      ...state,
      data: false,
      open: false,
    }),
  },
})
export const { openModal, closeModal } = modal.actions
export default modal.reducer
