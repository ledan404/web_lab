import { createStore } from "redux";
import cartReducer from "./reducers";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Choose your storage engine
const persistConfig = {
  key: 'root',
  storage,
  // Specify the reducers you want to persist
};
const persistedReducer = persistReducer(persistConfig, cartReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);