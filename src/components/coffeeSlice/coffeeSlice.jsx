import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import e from "cors";
import { act } from "react-dom/test-utils";
import { APIPATH } from "../../variables";

export const getAllProducts = createAsyncThunk('coffee/getAllProducts', async (filters) => {
  const filterParams = Object.entries(filters).map(params => params.join('=')).join('&');
  const res = await fetch(`${APIPATH}/products/?${filterParams}`)
  return await res.json();
  }
)

export const getProduct = createAsyncThunk('coffee/getProduct', async (id) => {
  const res = await fetch(`${APIPATH}/products/${id}`);
  return await res.json();
})

const initialState = {
    shoppingCart: {
      items: [],
      totalSum: 0,
    },
    products: []
}

const coffeeSlice = createSlice({
    name:'coffee',
    initialState,
    reducers: {
        addItemToShoppingCart: (state, action) => { 
          const productIndex = state.shoppingCart.items.findIndex((item) => item._id === action.payload)
          if (productIndex === -1) {
            const newProductIndex = state.products.findIndex((item) => item._id === action.payload); 
            state.shoppingCart.items = [...state.shoppingCart.items, {...state.products[newProductIndex], amount: 1}];  
          } else {
            state.shoppingCart.items = state.shoppingCart.items.map((product) => {
              if (product._id === action.payload) {
                return {...product, amount: product.amount + 1}
              }
              return product;
            })
          }
        },
        addCoffee: (state, action) => {
           state.shoppingCart.items = state.shoppingCart.items.map((item)=>{
                if (item._id === action.payload) {
                  return {...item, amount:item.amount + 1}
                }
                return item
              })
        },
        removeCoffee: (state, action) => {
            state.shoppingCart.items = state.shoppingCart.items.map((item)=>{
                if (item._id === action.payload) {
                  return {...item, amount:item.amount - 1}
                }
                return item
              })
        }
    },
    extraReducers: {
      [getAllProducts.fulfilled]: (state, action) => {
        state.products = action.payload.products;
      },
      [getProduct.fulfilled]: (state, action) => {
        state.product = action.payload.product;
      }
    }
})

const {reducer,actions} = coffeeSlice;

export default reducer;

export const {addCoffee,removeCoffee, addItemToShoppingCart} = actions;