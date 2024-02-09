import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {UserDataModel} from "../models/userModel"
import { addUserData, deleteUser, getAllUser, userDataEdit } from "../actions/UserAction";

export interface initialStateInterface {
    allUser : UserDataModel[]
    isLoading: boolean
    addUser: object 
    edituser: object
}

const initialState : initialStateInterface ={
    isLoading: true,
    allUser: [],
    addUser:{},
    edituser:{}
}
const UserSlice = createSlice({
    name : 'UserSlice',
    initialState: initialState,
    reducers: {},
    extraReducers :((builder)=>{
        builder.addCase(getAllUser.pending, (state)=>{
            state.isLoading = true
        })
        builder.addCase(getAllUser.fulfilled, (state, actions:PayloadAction<UserDataModel[]>)=>{
            state.isLoading = false
            state.allUser = actions.payload
        })
        builder.addCase(getAllUser.rejected, (state)=>{
            state.isLoading = false
            state.allUser = []
        })
        // add user
        builder.addCase(addUserData.pending, (state)=>{
            state.isLoading = true
        })
        builder.addCase(addUserData.fulfilled, (state, actions:PayloadAction<object>)=>{
            state.isLoading = false
            state.addUser = actions.payload
        })
        builder.addCase(addUserData.rejected, (state)=>{
            state.isLoading = false
            state.addUser = {}
        })
        // edit user
        builder.addCase(userDataEdit.pending, (state)=>{
            state.isLoading = true
        })
        builder.addCase(userDataEdit.fulfilled, (state, actions:PayloadAction<UserDataModel>)=>{
            state.isLoading = false
            state.edituser = actions.payload
        })
        builder.addCase(userDataEdit.rejected, (state)=>{
            state.isLoading = false
            state.edituser = {}
        })
        // delete user
        builder.addCase(deleteUser.pending, (state)=>{
            state.isLoading = true
        })
        builder.addCase(deleteUser.fulfilled, (state, actions:PayloadAction<UserDataModel[]>)=>{
            state.isLoading = false
            state.allUser = [...state.allUser]
        })
        builder.addCase(deleteUser.rejected, (state)=>{
            state.isLoading = false
            state.allUser = []
        })
    })
})
export default UserSlice.reducer