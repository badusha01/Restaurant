import React from 'react'
import { useParams } from 'react-router-dom'


function Restview() {

    // object create for useParams
    const params=useParams()
    console.log(params.id);

  return (
    <div>
        <h1>Single page</h1>
    </div>
  )
}

export default Restview