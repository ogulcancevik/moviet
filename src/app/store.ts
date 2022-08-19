import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import thunk from 'redux-thunk'
import global, { GlobalState } from './global'
import movie, { MovieState } from './modules/movie/movie'
export const store = configureStore({
  reducer: {
    movie,
    global
  },
  middleware: [thunk]
})

export interface IRootState {
  readonly global: GlobalState
  readonly movie: MovieState;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<any>()
