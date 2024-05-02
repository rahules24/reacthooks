import React, { useEffect, useState } from 'react'

const UseEffects1 = () => {
    useEffect(()=>{
        if (count) document.title = `React Hooks (${count})`;
        // console.log("I am useEffect")
    });
    // console.log("OUTSIDE useEffect")

    const[count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <button className="btn btn-sm btn-primary" onClick={()=>setCount(count+1)}>❤️</button>
    </div>
  )
}

export default UseEffects1
