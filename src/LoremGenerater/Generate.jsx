import React, { useEffect, useState } from 'react'
import { Data } from './data'

const Generate = () => {

    const [number, setNumber] = useState("")
    const [filterd, setFilterd] = useState()
    const [error, setError] = useState(false)

    const handleChange =(e)=>{
      e.preventDefault();
            
        if(number > Data?.length){
            setError(true)
        }
        else{
            setError(false)
            let sliceData = Data?.slice(0,number)
            setFilterd(sliceData)

        }
    }

    useEffect(()=>{
        if(number > Data?.length){
            setError(true)
            setFilterd();

        }
        else{
            setError(false)
            let sliceData = Data?.slice(0,number)
            setFilterd(sliceData)
        }
    },[number])
    
    
  return (
    <>
    <div className="container shadow mx-auto col-lg-5 my-4 p-4">
        <h2 className="display-4 m-0 text-center">Text Generater</h2>
        <form>
            <label htmlFor="name">Text Generater</label>
            <input type="number" id='name' placeholder='e.g 4' className='form-control' 
            value={number} onChange={(e)=>setNumber(e.target.value)}
            />
            {error && <p className='text-danger m-0'>Number should be lessthan or equal to {Data?.length}</p> }
            <button onClick={handleChange} className="btn btn-dark w-100 my-2">Generate text</button>
        </form>
    </div>

<div className="container">
    {filterd?.map((items,index)=>{
        return <p key={index} className='text-center'> {items} </p>
    })}
</div>
    
    </>
  )
}

export default Generate