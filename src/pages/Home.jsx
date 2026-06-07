import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Products from '../components/Products';
import Spinner from '../components/Spinner';


export const Home = () => {
  const api="https://fakestoreapi.com/products";
  const[loading,setLoading]=useState(false);
  const[posts,setPosts]=useState([]);
  async function fectchProductData() {
    setLoading(true);
    try {
      const res= await fetch(api);
      const data =await res.json();
      setPosts(data);
      
    } catch (error) {
      setPosts([]);
    }setLoading(false);
  }
  useEffect(()=>{
    fectchProductData();
  },[])
  return (
    <div >
      {
        loading?(<Spinner/>): posts.length > 0? (<div
         className='grid grid-cols-4 m-16'>{
          posts.map((post)=>(
            <Products key ={post.id} post={post}/>
          ))
          }
          </div>):(
        <div>
        <p>No Data Found</p>
        </div>)
      }
    </div>
  )
}
export default Home;