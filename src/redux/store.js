import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice"
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistCart = {
  key: 'cart',
  storage,
  
}

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: persistReducer(persistCart, cartReducer)
  },
  middleware: (defaultMiddleWare) => defaultMiddleWare({
    serializableCheck: false
  })
});

export const persistor = persistStore(store)