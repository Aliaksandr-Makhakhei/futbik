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
import signUpReducer from '../slices/signUpSlice'
import mapMarkersReducer from '../slices/mapMarkers'
import mapDetailsSlice from '../slices/mapDetails'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['getMarkers', 'signIn', 'signUp'] //не закидывает в локал сторадж
}

const rootReducer = combineReducers({
    signIn: signInReducer,
    signUp: signUpReducer,
    getMarkers: mapMarkersReducer,
    createDetails: mapDetailsSlice,
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