import React from 'react'

function Error(props) {
  return (
    <div className='container' style={{margin:"auto"}}>
        <div className='card bg-danger mt-5 p-4 mx-auto'>
        <h1 style={{fontFamily:"sans-serif"}} >Error :{props.code}</h1>
        <h2 style={{fontFamily:"sans-serif"}}>message:{props.message}</h2>
        <h3>please try again later</h3>
        </div>
    </div>
  )
}

export default Error