import React from 'react'

const Object = () => {
    const[myObj, setmyObj] = React.useState({
        myName: "Rahul", myAge:16, myClass: '10th', ID: 15885, School:"La Salle"
    })
    const changeName =()=> setmyObj({...myObj, myName:"Dante"})
    const changeAge =()=> setmyObj({...myObj, myAge:18})
    const changeClass =()=> setmyObj({...myObj, myClass:"12th"})
  return (
    <div>
      <h3>ID: {myObj.ID}</h3>
      <h3>School: {myObj.School}</h3>
      <h3>Name: {myObj.myName}</h3>
      <button className='btn btn-success btn-sm' onClick={changeName}>Change Name</button>
      <h3>Age: {myObj.myAge}</h3>
      <button className='btn btn-success btn-sm' onClick={changeAge}>Change Age</button>
      <h3>Class: {myObj.myClass}</h3>
      <button className='btn btn-success btn-sm' onClick={changeClass}>Change Class</button>
    </div>
  )
}

export default Object
