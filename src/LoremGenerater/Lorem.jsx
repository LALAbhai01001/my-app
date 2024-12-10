import React, { useState } from 'react'
import Values from 'values.js'

const Lorem = () => {
    const [colorValue, setColorValue] = useState("")
    const handlechange = (e)=>{
        e.preventDefault()
        let color = new Values(colorValue).all(10)
        console.log(color)
    }
  return (
    <>
    <div className="container col-lg-5 mx-auto shadow p-4 my-3">
        <h2 className="m-0 display-5">Generat Color</h2>
        <form>
            <label htmlFor="name">Color Generator</label>
            <input type="text" className='form-control'
            placeholder='e.g green'
            value={colorValue}
            onChange={(e)=>setColorValue(e.target.value)}
            />
            <button onClick={handlechange} className="btn btn-dark w-100 my-2">Generate Color</button>
        </form>
    </div>
    </>
  )
}

export default Lorem