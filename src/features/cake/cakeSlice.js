// const createSlice = require('@reduxjs/toolkit').createSlice;
import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    numOfCake:10
}

const cakeSlice = createSlice({
    name:'cake',
    initialState,
    reducers:{
        oredered(state,action){
            state.numOfCake -= action.payload
        },
        restocked:(state,action)=>{
            state.numOfCake += action.payload
        }
    }
});

export default cakeSlice.reducer;
// module.exports.cakeActions = cakeSlice.actions
export const {oredered,restocked} = cakeSlice.actions