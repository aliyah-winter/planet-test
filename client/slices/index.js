import { configureStore } from '@reduxjs/toolkit'
import fruits from './fruits'

const store = configureStore({
  reducer: {
    fruits,
  },
})

export default store
