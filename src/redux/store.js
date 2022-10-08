import {
  configureStore,
  // getDefaultMiddleware
} from '@reduxjs/toolkit';
import herosSlice from './herosSlice';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       // ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['refreshToken', 'sid'],
// };

export const store = configureStore({
  reducer: {
    // auth: persistReducer(authPersistConfig, financeSlice),
    heros: herosSlice,
  },
  // middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// export const persistor = persistStore(store);
