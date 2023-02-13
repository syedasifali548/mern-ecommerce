import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name:"product",
    initialState:{
        products:[],
        isFetching : false,
        isError : false
    },

 reducers:{
    // Get all products
    getProductStart:(state)=>{
        state.isFetching = true
        state.isError = false
    },
    getProductSuccess:(state,action)=>{
        state.isFetching = false
        state.isError = false
        state.products = action.payload
    },
    getProductFailure:(state)=>{
        state.isFetching = false
        state.isError = true
    },
    // Delete product
    deleteProductStart:(state)=>{
        state.isFetching = true
        state.isError = false
    },
    deleteProductSuccess:(state,action)=>{
        state.isFetching = false
        state.isError = false
        state.products.splice(
            state.products.findIndex((item)=> item._id===action.payload),1
        )
        
    },
    deleteProductFailure:(state)=>{
        state.isFetching = false
        state.isError = true
    },
    // Update product
    updateProductStart:(state)=>{
        state.isFetching = true
        state.isError = false
    },
    updateProductSuccess:(state,action)=>{
        state.isFetching = false
        state.isError = false
        state.products[
            state.products.findIndex((item)=> item._id===action.payload.id)
        ] = action.payload.product
    },
    updateProductFailure:(state)=>{
        state.isFetching = false
        state.isError = true
    },
    // Add product
//UPDATE
addProductStart: (state) => {
    state.isFetching = true;
    state.error = false;
  },
  addProductSuccess: (state, action) => {
    state.isFetching = false;
    state.products.push(action.payload);
  },
  addProductFailure: (state) => {
    state.isFetching = false;
    state.error = true;
  },
},
});
export const {
    getProductStart,getProductSuccess,getProductFailure,
    deleteProductStart,deleteProductSuccess,deleteProductFailure,
    updateProductStart,updateProductSuccess,updateProductFailure,
    addProductStart ,addProductSuccess,addProductFailure
}= productSlice.actions
export default productSlice.reducer
