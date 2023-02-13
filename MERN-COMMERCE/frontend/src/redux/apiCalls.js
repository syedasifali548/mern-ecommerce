import { loginStart,loginSuccess,loginFailure ,
  registerStart,registerSuccess,registerFailure,logoutSuccess
} from "./userSlice"
// import {publicRequest} from '../requestMethods'
import { pubicRequest } from "../requestMethods";


export const login = async (dispatch , user)=>{
      dispatch(loginStart())
      try {
        const res = await pubicRequest.post("auth/login",user)
        console.log(res);
        dispatch(loginSuccess(res.data))
      } catch (error) {
        dispatch(loginFailure())
      }

}

export const register = async (dispatch,user)=>{
  dispatch(registerStart())
  try {
    const res = await pubicRequest.post("auth/register",user)
    dispatch(registerSuccess(res.data))
  } catch (error) {
    dispatch(registerFailure())
  }
}
export const logout = (dispatch)=>{
  dispatch(logoutSuccess())
  localStorage.removeItem('persist:root')
}
