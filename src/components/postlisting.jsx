import React from 'react'
import { postlisting } from '../utils' 



export default function postlisting(){
  return(

    <div className='blog-list'>
      {

 postlisting.map((post)=>{
  <div className='container'>
    <div className='row text-start justify-content-center'>
      <div className='blog-color mb-5 col-lg-7'>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      </div>
    </div>
  {/* <link to = {`post/${post.id}`}>Details<link/> */}
  </div>
})
      }
<div className='d-flex text-center justify-content-center'>
  <h2> 
    looking for <span>more</span>
  </h2>
  <a href='/' className='blog-btn ms-4'>archive<i className='ms-2 fa-solid fa-leaf'></i></a>
</div>

<footer className='footer-icon mt-5 mb-5 justify-content-center  '>

<a href="/"><i className="fa-brands fa-twitter"></i></a>
<a href="/"> <i className="fa-brands fa-dribbble"></i></a>
<a href="/"> <i className="fa-brands fa-instagram"></i></a>
</footer>
</div>
   
   
  );
}