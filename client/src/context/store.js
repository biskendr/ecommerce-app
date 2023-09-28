import { configureStore } from '@reduxjs/toolkit'
import modal from './modalSlice'

const store = configureStore({
  reducer: {
    modal,
  },
})

export default store
