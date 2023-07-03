// const { cakeActions } = require('../cake/cakeSlice');
// const createSlice = require('@reduxjs/toolkit').createSlice;
import {createSlice} from '@reduxjs/toolkit'
import { oredered as cakeOrdered } from '../cake/cakeSlice';


const initialState ={
    numOfIceCream:20
} 

const iceCreamSlice = createSlice({
    name:"icecream",
    initialState,
    reducers:{
        orederedIce(state,action){
            state.numOfIceCream -=action.payload;
        },
        restockedIce(state,action){
            state.numOfIceCream +=action.payload
        }
    },
    //we can define two ways but most recommand is second way
    // extraReducers:{
    //     ['cake/oredered']:(state,action)=>{
    //         state.numOfIceCream--
    //     }
    // }
    extraReducers:(builder)=>{
        builder.addCase(cakeOrdered,(state,action)=>{
            state.numOfIceCream--
        })
    }
})

export default iceCreamSlice.reducer;
export const {orederedIce,restockedIce} = iceCreamSlice.actions;
// module.exports = iceCreamSlice.reducer;
// module.exports.iceCreamActions = iceCreamSlice.actions; 