import React, { useEffect, useState } from 'react'
import SingleList from './SingleList'
import toast from 'react-hot-toast'

const TodoList = () => {

    // data insert state

    const [insertName, setInsertName] = useState("")
    const [insertEmail, setInsertEmail] = useState("")
    const [insertmsg, setInsertMsg] = useState("")
    const [insertImg, setInsertImg] = useState("")
    
    const [allData, setAllData] = useState([])

    const [error, setError] = useState(false)
    
    const handleClick = ()=>{
      if (!insertName || !insertEmail || !insertmsg || !insertImg){
      
        // alert("All field are required")

        toast.error("All fields are required. Please fill out the form completely.");
        setError(true)
      
      } else {
        const newEntry = {
          id: Date.now(),
          name: insertName,
          email: insertEmail,
          msage: insertmsg,
          img: insertImg,
        };

        // Add the new object to the array
        // setAllData([...allData, newEntry]);
setAllData((prevData) => [...prevData, newEntry]);
        // Clear the input fields after adding to the array (optional)
        setInsertName("");
        setInsertEmail("");
        setInsertMsg("");
        setInsertImg("");
      }
      }
  
    

      const handleChange = (id)=>{
          const newAllData = allData?.filter((item,index)=>{
            return item?.id !== id
          })

          setAllData(newAllData)
          toast.success("Successfuly Deleted")
      }
      

      useEffect(()=>{
        if(insertName.length > 0){
          setError(false)
        }
      },[insertName])

    
  return (
    <>
      <div
        className={`container col-lg-5 mx-auto p-3 my-2 shadow ${
          error ? "border-danger" : ""
        } `}
      >
        <h1 className="display-4 text-center">Add Data</h1>

        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter Your Name..."
              className={`form-control ${error ? "is-invalid" : ""}`}
              value={insertName}
              onChange={(e) => setInsertName(e.target.value)}
            />
            {error && (
              <p className="text-danger m-0 fw-semibold">
                Please fill the form
              </p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="text"
              placeholder="Enter Your Email..."
              className={`form-control ${error ? "is-invalid" : ""}`}
              value={insertEmail}
              onChange={(e) => setInsertEmail(e.target.value)}
            />
            {error && (
              <p className="text-danger m-0 fw-semibold">
                Please fill the form
              </p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="pass">Message</label>
            <textarea
              id="pass"
              type="text"
              placeholder="Enter Your Msg..."
              className={`form-control ${error ? "is-invalid" : ""}`}
              value={insertmsg}
              onChange={(e) => setInsertMsg(e.target.value)}
            />
            {error && (
              <p className="text-danger m-0 fw-semibold">
                Please fill the form
              </p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="img">Profile Image</label>
            <input
              id="img"
              type="text"
              className={`form-control ${error ? "is-invalid" : ""}`}
              value={insertImg}
              onChange={(e) => setInsertImg(e.target.value)}
            />
            {error && (
              <p className="text-danger m-0 fw-semibold">
                Please fill the form
              </p>
            )}
          </div>
          <button
            onClick={handleClick}
            type="button"
            className="btn btn-info w-100 my-2 "
          >
            Submit Data{" "}
          </button>
          {/* <button onClick={insertData} className="btn btn-info w-100 my-2">Submit Data</button> */}
        </form>
      </div>

      <div className="container mx-auto row">
        {allData?.map((items, index) => {
          return (
            <SingleList
              key={index}
              name={items.name}
              email={items.email}
              msage={items.msage}
              image={items.img}
              id={items.id}
              remove={handleChange}
            />
          );
        })}
      </div>
    </>
  );
}

export default TodoList