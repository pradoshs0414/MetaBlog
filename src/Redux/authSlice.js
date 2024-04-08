import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState :{
        status:false,
        authData:null
        
    },
    reducers:{
            login:(state,action)=>{
                state.status = true
                state.authData = action.payload.authData
            },
            logout:(state)=>{
                state.status = false
                state.authData=null
            }
    }
})

export const { login, logout} =authSlice.actions
export default authSlice.reducer

