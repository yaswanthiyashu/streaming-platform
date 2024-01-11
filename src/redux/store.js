import { configureStore, applyMiddleware } from "@reduxjs/toolkit"
import { movieReducer } from "./reducers/movieReducer"
import thunk from 'redux-thunk'

const rootReducer = {
  movie: movieReducer,
}



export const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk))
