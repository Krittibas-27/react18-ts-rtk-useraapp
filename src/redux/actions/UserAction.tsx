import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserBaseApi } from "../../rootApi";
import { UserDataModel } from "../models/userModel";

export const getAllUser = createAsyncThunk<UserDataModel[]>('get/userall', async()=>{
    const res = await UserBaseApi.get('/userdata')
    //console.log('res', res)
    return res.data
})