// Steps to create store
import {configureStore} from '@reduxjs/toolkit';//configureStore is a method
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer //key value
})