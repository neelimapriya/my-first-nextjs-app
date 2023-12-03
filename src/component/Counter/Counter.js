'use client'
import React, { useState } from 'react';

const Counter = () => {
    const [count,setCount]=useState(0)
    return (
        <div>
             <h2>counter: {count}</h2>
            <button className='btn text-green-600 text-2xl  pr-5' onClick={()=>setCount(count +1)}>Increase</button>
            <button className='btn text-red-600 text-2xl' onClick={()=>setCount(count -1)}>Decrease</button> 
        </div>
    );
};

export default Counter;