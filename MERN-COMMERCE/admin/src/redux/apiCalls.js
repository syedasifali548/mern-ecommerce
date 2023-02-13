import { loginStart,loginSuccess,loginFailure ,
  registerStart,registerSuccess,registerFailure,logoutSuccess
} from "./userSlice"
import{
  getProductStart,getProductSuccess,getProductFailure,
  deleteProductStart,deleteProductSuccess,deleteProductFailure,
  updateProductStart,updateProductSuccess,updateProductFailure,
  addProductStart ,addProductSuccess,addProductFailure
} from "./productSlice"
import { publicRequest, userRequest } from "../requestMethods";


export const login = async (dispatch , user)=>{
      dispatch(loginStart())
      try {
        const res = await publicRequest.post("auth/login",user)
        dispatch(loginSuccess(res.data))
      } catch (error) {
        dispatch(loginFailure())
      }

}
// To get all the products
export const getProducts = async (dispatch)=>{
  dispatch(getProductStart())
  try {
    const res = await publicRequest.get("/products")
    dispatch(getProductSuccess(res.data))
  } catch (error) {
   dispatch(getProductFailure()) 
  }
}
// To delete product
export const deleteProduct = async (id,dispatch)=>{
  dispatch(deleteProductStart());
  try {
    // const res = await publicRequest.delete(`/products/${id}`)
    dispatch(deleteProductSuccess(id));
  } catch (error) {
    dispatch(deleteProductFailure())
  }

}
// To update product
export const updateProduct =async(id,dispatch,product)=>{
  dispatch(updateProductStart());
  try {
      //  const res = userRequest.put(`/p/${id}`,product,id)
    dispatch(updateProductSuccess({id,product}))
  } catch (error) {
    dispatch(updateProductFailure())
  }
}
// To Add product
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};



















// export const register = async (dispatch,user)=>{
//   dispatch(registerStart())
//   try {
//     const res = await publicRequest.post("auth/register",user)
//     dispatch(registerSuccess(res.data))
//   } catch (error) {
//     dispatch(registerFailure())
//   }
// }
// export const logout = (dispatch)=>{
//   dispatch(logoutSuccess())
//   localStorage.removeItem('persist:root')
// }
