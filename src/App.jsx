import React from 'react'
import TodoList from './TodoList'
import toast, { Toaster } from "react-hot-toast";
import Lorem from './LoremGenerater/Lorem';
import Generate from './LoremGenerater/Generate';

const App = () => {
  return (
    <>
    {/* <TodoList/> */}
    <Toaster/>
    <Lorem/>
    <Generate/>
    </>
  )
}

export default App

