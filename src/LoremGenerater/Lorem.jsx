import React, { useState } from 'react'
import Values from 'values.js'
import SingleColor from './SingleColor'

const Lorem = () => {
    const [colorValue, setColorValue] = useState("")
    const [error,setError] = useState(false)
    const [colorList, setColorList] = useState([])
    const handlechange = (e)=>{
        e.preventDefault()
        try {
            setError(false)
            let color = new Values(colorValue).all(10);
            setColorList(color)
            console.log(color);
        } catch (error) {
            setError(true)
        }
       
    }
    return (
    <>
    <div className="container col-lg-5 mx-auto shadow p-4 my-3">
        <h2 className="m-0 display-5">Generat Color</h2>
        <form>
            <label htmlFor="name">Color Generator</label>
            <input type="text" className={`form-control ${error ? "is-invalid" : "" }`}
            placeholder='e.g green'
            value={colorValue}
            onChange={(e)=>setColorValue(e.target.value)}
            />
            <button onClick={handlechange} className="btn btn-dark w-100 my-2">Generate Color</button>
        </form>
    </div>



    
    <div className="container row mx-auto">
        {colorList?.map((items,index)=>{
            return <SingleColor key={index} {...items} hex={items?.hex} />
        })}
    </div>
    
    
    </>
  )
}

export default Lorem