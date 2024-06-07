import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});


//gpt ,kashif@lowcode-x.com,BgMZGZtJ3p@T=f