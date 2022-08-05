import { createSlice } from '@reduxjs/toolkit'
import { IPopularSeries } from './tv.types'
export interface TvState {
    popularSeries: IPopularSeries
}

const initialState: TvState = {
  popularSeries: {
    page: 0,
    results: []
  }
}

export const counterSlice = createSlice({
  name: 'tv',
  initialState,
  reducers: {
    SET_POPULAR_SERIES: (state, action) => {
      state.popularSeries = action.payload
    }
  }
})

export const { SET_POPULAR_SERIES } = counterSlice.actions
export default counterSlice.reducer
