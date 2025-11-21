import { useState } from 'react'
import './App.css'
import Header from "./MyComponents/Header.jsx";
import Footer from "./MyComponents/Footer.jsx";
import Todo from "./MyComponents/Todo.jsx";

function App() {
  const [count, setCount] = useState(0)
  const [testCount, setTestCount] = useState(0)
  return (
    <>
     
      <Header title="My ToList"/>
      <Todo />
      <Footer />
      
     
    </>
   
     
  )
}

export default App
