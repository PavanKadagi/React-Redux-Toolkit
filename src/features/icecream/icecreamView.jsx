import { useDispatch, useSelector } from "react-redux"
import { orederedIce, restockedIce } from "./icecreamSlice";
import { useState } from "react";

export  const IceCreamView = ()=>{
    const dispatch = useDispatch();
    const iceCream = useSelector(state=>state.iceCream)
    const [value,setValue] = useState(1)
    return(
        <>
        <h2>number of ice creams - {iceCream.numOfIceCream} </h2>
        <button onClick={()=>dispatch(orederedIce(1))} >Order ice cream</button>
        <input type="number" placeholder="Restocked Value" value={value} onChange={e=>setValue(parseInt(e.target.value))} />
        <button onClick={()=>dispatch(restockedIce(value))} >Restock ice creams</button>
        </>
    )
}