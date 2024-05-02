import React from 'react'

const ShortCircuitEval = () => {
  return (
    <div>
      <h1>{1 && "true and(2nd)"}</h1>
      <h1>{0 && "false and"}</h1>
      <h1>{1 || "true or"}</h1>
      <h1>{0 || "false or(2nd)"}</h1>
    </div>
  )
}

export default ShortCircuitEval
