import type { NextPage } from 'next';
import { useCallback,useEffect,useState } from 'react';
import {CountContent} from '../components/CountContent'


const Count: NextPage = () => {
 const [count,setCount]=useState(0);
 useEffect(()=>{
  console.log("render");
 },[count])
 const updateCount= useCallback(()=>{
  setCount((pre)=>pre+1);
 },[]);
  

  return(
    <CountContent count={count} addCount={updateCount}/>
  )
  
}

export default Count;
