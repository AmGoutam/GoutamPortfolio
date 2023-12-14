"use client"
import React, { useEffect, useRef } from 'react'

const Cursor = () => {

    const cursor = useRef();


useEffect(() => {
    window.addEventListener("mousemove",(e)=>{
        cursor.current.style.left = e.x + "px";
        cursor.current.style.top = e.y + "px";
    })
}, [cursor])

  return (
    <>
        <div className="cursor" ref={cursor}></div>
    </>
  )
}

export default Cursor