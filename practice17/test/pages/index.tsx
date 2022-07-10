import type { NextPage } from 'next';
import { useMemo } from 'react';
import { arrayBuffer } from 'stream/consumers';
import { HomeContent } from '../components/HomeContent';



const Home: NextPage = () => {
  const array=useMemo(()=>[1,2,3,4,5,6],[]);
  return(
    <>
    {array.map((i)=>{
      return (
          <HomeContent key={i}/>
        )
    })}
    </>
  );
  
}

export default Home;
