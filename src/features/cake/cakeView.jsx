import { useDispatch, useSelector } from "react-redux"
import { oredered, restocked } from "./cakeSlice";

export  const CakeView = ()=>{
    const cakes = useSelector((state)=>state.cake);
    const dispatch = useDispatch();
    return(
        <>
        <h2>number of cakes - {cakes.numOfCake}</h2>
        <button onClick={()=>dispatch(oredered(1))} >Order cake</button>
        <button onClick={()=>dispatch(restocked(3))} >Restock cakes</button>
        </>
    )
}