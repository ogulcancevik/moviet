import { IRootState } from './store'

export const globalSelector = (state : IRootState) => state.global
export const movieSelector = (state : IRootState) => state.movie
export const tvSelector = (state : IRootState) => state.tv
