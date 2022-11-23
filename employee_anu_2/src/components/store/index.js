import { configureStore } from '@reduxjs/toolkit';

import dataSlice from './data-slice';

const store = configureStore({
  reducer: { EmpDATA: dataSlice.reducer },
});

export default store;
