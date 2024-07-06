import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Axiosdata() {
    const [data,setdata]=useState([]);
    useEffect(()=>{
        axios.get('https://reqres.in/api/users?page=2')
        .then(res=>setdata(res.data.data))
        .then(err=>console.log(err))
    },[])
  return (
    <div>
        Axios topic
        {
        data.map((d,i) => {
           return <p key={i}>{d.email}</p>
})
    }
    </div>
  )
}

export default Axiosdata