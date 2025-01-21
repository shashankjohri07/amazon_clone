import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    toggleItem: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.selected = !item.selected;
      }
    },

    changeQuantity: (state, action) => {
      const id = action.payload.id;
      const increment = action.payload.increment;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity += increment;
        if (item.quantity === 0) {
          cartSlice.caseReducers.removeItem(state, { payload: id }); // Using removeItem if quantity is 0
          // OR
          // state.items = state.items.filter((item) => item.id !== id);
        }
      }
    },

    addItem: (state, action) => {
      const item = action.payload;
      const itemInCart = state.items.find((i) => i.id === item.id);
      if (itemInCart) {
        return;
      } else {
        state.items.push({ ...item, quantity: 1, selected: true });
      }
    },

    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },

    // totalPrice: (state) => {
    //   return state.items.reduce(
    //     (acc, item) => acc + item.price * item.quantity,
    //     0
    //   );
    // },
  },
});

export const { addItem, removeItem, clearCart, toggleItem, changeQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
