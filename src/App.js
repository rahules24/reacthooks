import React, {useState} from 'react'
import './App.css'
import Array from './components/Array'
import Object from './components/Object'
import ShortCircuitEval from './components/ShortCircuitEval'
import BasicForm from './components/BasicForm'
import UseEffects1 from './components/useEffect/UseEffects1'

const App = () => {
  const[val, setVal] = useState("React Hooks");
  const changeName=()=>{
    val === "React Hooks"? setVal("Learn JS"): setVal("React Hooks")
  }
  return (
    <>
      {/* <Array /> */}
      {/* <div>
        <h1>{val}</h1>
        <button type="button" className='btn btn-outline-primary btn-sm' onClick={changeName}>Click Me!</button>
      </div> */}
      {/* <Object /> */}
      {/* <ShortCircuitEval /> */}
      {/* <BasicForm /> */}
      <UseEffects1 />
    </>
  )
}

export default App
