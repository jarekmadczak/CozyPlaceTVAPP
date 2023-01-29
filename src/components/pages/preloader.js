import React,{ useEffect } from 'react'
import { useState } from "react";
function preloader() {
    const[data,setData]=useState([]);
    const[done,setDone]=useState(undefined);
  return (
    <>
        preloader
    </>
  )
}

export default preloader