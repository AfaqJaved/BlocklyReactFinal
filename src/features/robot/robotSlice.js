import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {},
  mode: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct(state, action) {
      state.product = action.payload;
    },
    setMode(state, action) {
      state.mode = action.payload;
    },
    resetProduct: () => initialState,
  },
});

export const { resetRobot, setProduct, setMode } = productSlice.actions;
export default productSlice.reducer;
