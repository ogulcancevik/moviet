import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import thunk from 'redux-thunk'
import movie, { MovieState } from './modules/movie/movie'
export const store = configureStore({
  reducer: {
    movie
  },
  middleware: [thunk]
})

export interface IRootState {
  readonly movie: MovieState;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<any>()
