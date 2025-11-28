import { useState } from 'react';
import './App.css';
import Header from "./MyComponents/Header.jsx";
import Footer from "./MyComponents/Footer.jsx";
import Todo from "./MyComponents/Todo.jsx";
import Contactus from "./MyComponents/pages/Contactus.jsx";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);
  const [testCount, setTestCount] = useState(0);

  return (
    <>
      <Router>
        <Header title="My ToList" />
        <Routes>
          <Route path="/" element={<Todo />} />
        </Routes>
        <Routes>
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
