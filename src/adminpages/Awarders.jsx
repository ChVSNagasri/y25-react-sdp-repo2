import React, { useEffect, useState } from 'react'
export default function Demo1() 
{ 
    const[data,setData]=useState([])
    const [error,setError]=useState("")
 useEffect(() => { 
    fetch("https://jsonplaceholder.typicode.com/users").then((response)=>
       response.json()
    ).then((data) => 
        setData(data)
    ).catch((err) => {
        setError(err.message)
    });
 }, []);// empty Dependency array //Dependency is input 
  return (
    <div>
    <h2><u>Fetch API Demo</u></h2> 
    {
        error? <b>{error}</b>:
        data.length==0? <b>Loading...</b>:
    <table border={1}>
        <tr>
            <th>ID</th>
             <th>NAME</th>
             <th>CITY</th>
             <th>PHONE</th>
             <th>Company NAME</th>
        </tr>
        {
            data.map((user,index)=>(
            <tr key={index}>
                <td>{user.id}</td>
               <td>{user.name}</td>
               <td>{user.address.city}</td>
               <td>{user.phone}</td>
               <td>{user.company.name}</td>
            </tr>
            ) )
        }
    </table>
}
    </div>
  )
}