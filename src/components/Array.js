import React from 'react'

const Array = () => {
    let myData = [
        {
            id: 0, name:"Jacob", age: 21
        }, {
            id: 1, name:"Lluke", age: 18
        }, {
            id: 2, name:"Robin", age: 16
        }
    ]
    const [myArr, setmyArr] = React.useState(myData);
    const clearAll=()=> {
        setmyArr([])
    }
    const restoreAll=()=> {
        setmyArr(myData)
    }
    const removeLine=(xx)=> {
        const newArr = myArr.filter(ele =>{
            return ele.id !== xx;
        });
        setmyArr(newArr)
    }
  return (
    <>
        <table className="table table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">age</th>
                    <th scope="col">remove</th>
                </tr>
            </thead>
            <tbody>
                { myArr.map((ele) =>{
                    return(
                    <tr key={ele.id}>
                        <th scope="row">{ele.id}</th>
                        <td>{ele.name}</td>
                        <td>{ele.age}</td>
                        <td>
                            <button className="btn-danger btn btn-sm" onClick={()=> removeLine(ele.id)}>Remove</button>
                        </td>
                    </tr>
                    )
                    }
                    )
                }
            </tbody>
        </table>
        {/* <div style={{height:'350px'}}></div> */}
        {/* <div style={{display:'inline', position:'fixed'}} class="btn-group" role="group"> */}
        <div style={{display:'inline'}} class="btn-group" role="group">
        <button className='btn btn-outline-danger btn-space btn-sm' onClick={clearAll}>Clear!</button>
        <button className='btn btn-outline-dark btn-sm btn-space' onClick={restoreAll}>Restore</button>
        </div>
    </>
  )
}

export default Array
