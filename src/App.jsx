import React from 'react'
import TodoList from './TodoList'
import toast, { Toaster } from "react-hot-toast";
import Lorem from './LoremGenerater/Lorem';

const App = () => {
  return (
    <>
    <TodoList/>
    <Toaster/>
    <Lorem/>
    </>
  )
}

export default App

