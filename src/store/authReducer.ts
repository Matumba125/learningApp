import {createAsyncThunk} from "@reduxjs/toolkit"
import {authApi} from "../api/auth-api"
import {setIsLoading} from "./appReducer"
import {setLoggedAC} from "./loginizationReducer"

export const authMeTC = createAsyncThunk('auth/authMe', async (param, {dispatch, rejectWithValue}) => {
    try {
        dispatch(setIsLoading({isLoading: true}))
        const res = await authApi.me()
        dispatch(setLoggedAC({isLoggedIn: true}))
        return {userData: res.data}
    } catch (error) {
        return rejectWithValue(error)
    } finally {
        dispatch(setIsLoading({isLoading:false}))
    }
})