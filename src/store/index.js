import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import signInReducer from '../slices/signInSlice'
import mapMarkersReducer from '../slices/mapMarkersSlice'
import stadiumDetailsReducer from '../slices/stadiumDetailsSlice'
import addPlayerReducer from '../slices/addPlayerSlice'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['getMarkers']
}

const rootReducer = combineReducers({
    signIn: signInReducer,
    getMarkers: mapMarkersReducer,
    getStadiumDetails:  stadiumDetailsReducer,
    addPlayer: addPlayerReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
export default store