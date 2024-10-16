import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type product = {
  productId: number;
  quantity: number;
};

interface cartSlice {
  cartList: product[];
}

const initialState: cartSlice = {
  cartList: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: (create) => ({
    addProduct: create.reducer((state, action: PayloadAction<product>) =>{
        state.cartList.push(action.payload);
    }),
  }),

//   reducers: {
//     addProduct: (state, action: PayloadAction<product>) => {
//       // Ensure action.payload is of type Product
//       state.cartList.push(action.payload); // Push the product directly
//     },
//   },
  selectors: {
    setList: (cart) => cart.cartList,
  },
});

export const { addProduct } = CartSlice.actions;

export const { setList } = CartSlice.selectors;
