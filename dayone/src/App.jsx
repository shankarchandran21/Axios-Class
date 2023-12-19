
import { useEffect, useState } from 'react'
import './App.css'
import JsonServer from './JsonServer'
import axios from 'axios'
function App() {
const [data,setData] = useState([])
useEffect(()=>{
  
  axios.patch(`http://localhost:3031/user/7`,
    { headers: requestHeaders }
  ,{name:"Changes"}).then(()=>console.log('Super'))
  .catch((err)=>console.log(err))


  const fetchData = async()=>{
      try {
        const response = await axios.get(`http://localhost:3031/user`,{
          headers:{
            Accept: `application/json`
            
          }
        })
        setData(response)
      } catch (error) {
        console.log(error)
      } 
    
  }
  fetchData()
},[])





console.log(data)

  return (
      <div>
        <JsonServer/>
      </div>
  )
}

export default App
