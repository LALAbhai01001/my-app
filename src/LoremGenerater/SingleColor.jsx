import React, { useState } from 'react'
import { MdContentCopy } from "react-icons/md";
import { IoCheckmarkDone } from 'react-icons/io5';

const SingleColor = ({rgb,hex}) => {
    const [copy, setCopy] = useState(false)

    const handleCopy = ()=>{
        setCopy(true)
        navigator.clipboard.writeText(`#${hex}`)
        setTimeout(() => {
            setCopy(false)
        }, 1000);
    }


    
  return (
    <>
    <div className="col-lg-3 col-md-4">
        <div style={{
            background: `rgb(${rgb})`
        }} className="card shadow border-0 my-3 p-2">



            {copy ? 
            (
                <IoCheckmarkDone  style={{cursor: "pointer"}}/>
            )
            : 
            (
            <MdContentCopy onClick={handleCopy} style={{cursor: "pointer"}} />

            ) }
            
            <h5 className='p-3'>#{hex}</h5>
        </div>
    </div>
    </>
  )
}

export default SingleColor