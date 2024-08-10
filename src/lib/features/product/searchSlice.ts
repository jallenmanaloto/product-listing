import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  productName: string;
}

const initialState: SearchState = {
  productName: '',
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setProductName: (state, action: PayloadAction<string>) => {
      state.productName = action.payload;
    },
  },
});

export const { setProductName } = searchSlice.actions;
export default searchSlice.reducer;
