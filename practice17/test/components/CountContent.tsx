import {FC} from "react";

type CountContentProgs={
  count:number;
  addCount:()=> void;
}

export const CountContent:FC<CountContentProgs>=({count,addCount})=>{
  return (
    <>
      <p>{count}</p>
      <button onClick={addCount}>加算</button>
    </>
    
  )
}