import { useEffect } from "react";
import { useState } from "react"


function Cards() {
  const [data,setData] = useState([]);

  useEffect(() => {
      fetch("Data/botoles.json")
      .then( res => res.json())
      .then(data => setData(data))
  },[])
  return (
    <div>
      {
        data && data.map(item => console.log(item))
      }
    </div>
  )
}

export default Cards
