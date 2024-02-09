import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserBaseApi } from "../../rootApi";
import { UserDataModel } from "../models/userModel";

export const getAllUser = createAsyncThunk<UserDataModel[]>('get/userall', async()=>{
    const res = await UserBaseApi.get('/userdata')
    //console.log('res', res)
    return res.data
})

export const addUserData = createAsyncThunk('post/useradd', async (userData:UserDataModel ) => {
    const res = await UserBaseApi.post('/userdata', userData)
    return res.data
})
export const userDataEdit = createAsyncThunk('edit/user', async(editData:UserDataModel)=>{
    const res = await UserBaseApi.put(`/userdata/${editData.id}`, editData)
    return res.data
})
export const deleteUser = createAsyncThunk('delete/user', async(delid: number | string)=>{
    const res = await UserBaseApi.delete(`/userdata/${delid}`)
    return res.data
})

export const addnweUser = createAsyncThunk('user/postnewuser',async(postData)=>{
    const res = await UserBaseApi.post('`/userdata', postData)
    console.log(res)
    return res
})