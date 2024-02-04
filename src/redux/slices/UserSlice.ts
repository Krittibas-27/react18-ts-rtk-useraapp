import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {UserDataModel} from "../models/userModel"
import { getAllUser } from "../actions/UserAction";

export interface initialStateInterface {
    allUser : UserDataModel[]
    isLoading: boolean
}

const initialState : initialStateInterface ={
    allUser: [],
    isLoading: true
}
const UserSlice = createSlice({
    name : 'UserSlice',
    initialState: initialState,
    reducers: {},
    extraReducers :((builder)=>{
        builder.addCase(getAllUser.pending, (state, actions)=>{
            state.isLoading = true
        })
        builder.addCase(getAllUser.fulfilled, (state, actions:PayloadAction<UserDataModel[]>)=>{
            state.isLoading = false
            state.allUser = actions.payload
        })
        builder.addCase(getAllUser.rejected, (state, actions)=>{
            state.isLoading = false
            state.allUser = []
        })
    })
})
export default UserSlice.reducer