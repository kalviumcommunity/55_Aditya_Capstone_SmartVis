import Home from "./components/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Main from "./components/Main";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/book" element={<Main/>}/>
      </Routes> 
            
    </>
  )
}

export default App
