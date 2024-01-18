import React from "react";
import { Route, Routes } from "react-router-dom";
import postlisting from "./components/postlisting";
import postdetail from "./components/postdetail";
export default function Router() {
    return (
<Routes>
    <Route path="/post/">
          <Route index element ={postlisting}/>
        <Route path=":id" element ={postdetail}/>
    </Route>
  
</Routes>
     
    );
}
