import React, { useState } from 'react'

const SingleList = ({name,email,image,msage,id,remove }) => {

    const [show, setShow] = useState(false);

    const open = () => {
      if (show == "") {
        setShow(msage);
      } else setShow(false);
    };
  
return (
  <>
    <div className="col-lg-4 mx-auto text-center card p-3 my-2 gap-2 shadow border-rounded-3">
    <img 
    src={image} alt="userimg"  
    className="img-fluid" />

    <h4>{name}</h4>
    <h6>{email}</h6>


    <p className='d-flex justify-content-center gap-2 m-0'>
      {msage.length > 10 ? `${msage.slice(0,10)}...` : msage}
      {msage.length > 10 &&  <span onClick={open} style={{cursor: "pointer"}} className='text-primary'>
              {show ? "Read less" : "Read more"}
              </span>}
      </p>
      <p className='m-0'>
        {show}
      </p>
    
    <button onClick={()=>remove(id)} className="btn btn-danger w-100 my-2">Delete</button>
    </div>
  </>
);
}

export default SingleList