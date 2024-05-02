import React, { useState } from 'react'

const BasicForm = () => {
    const[email, setEmail] = useState("");
    const[pass, setPass] = useState("");
    
    const[allEntry, setAllEntry] = useState([]);
    const submitForm =(e)=>{
        e.preventDefault();
        if (email && pass){
        const newEntry = {id: new Date().getTime().toString(), email, pass}
        setAllEntry([...allEntry, newEntry])
        setEmail('');
        setPass('');
    }
    else {
        alert('try again! fields are empty :(');
    }
    }
  return (
    <>
    <form action='' onSubmit={submitForm}>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" autoComplete='off'
            value={pass}
            onChange={(e)=> setPass(e.target.value)}
            />
        </div>
        <button className="btn btn-primary btn-sm my-2">Submit</button>
    </form>
    <div style={{alignItems:'flex-start'}}>
        {allEntry.map(ele=>{
            const {id, email, pass} = ele;
            return ( 
                <h5 key={id}>
                    Email: {email}
                    <br/>
                    Password: {pass}
            </h5>
            )
        })}
    </div>
    </>
  )
}

export default BasicForm
