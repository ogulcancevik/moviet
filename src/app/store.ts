import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import thunk from 'redux-thunk'
import global, { GlobalState } from './global'
import movie, { MovieState } from './modules/movie/movie'
const middlewares = [thunk]
const reducers = combineReducers({
  global,
  movie
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['global']
}
const persistedReducer = persistReducer(persistConfig, reducers)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares
})

export interface IRootState {
  readonly global: GlobalState;
  readonly movie: MovieState;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<any>()
