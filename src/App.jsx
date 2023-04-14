import React from "react";
// import AddPage from "./Pages/AddPage";
// import ViewPage from "./Pages/ViewPage";
import { Route, Routes } from "react-router-dom";
import Table from "./Components/Table";
import Form from "./Components/Form";




function App() {


  return (

<div className=" h-screen w-full bg-[#f5e9e2] "  >
    <div className="h-20 w-screen bg-[#e3b5a4]">
     <p className="flex justify-center content-center p-7 text-gray-50 text-lg font-sans font-bold ">SparkShare</p>
    </div>
   <h1 className="text-center text-lg font-serif pt-11">Share Your Business Ideas: Let's Build Something Great Together!</h1>

    <div >
    <Routes>
       <Route path="/" element={<Table/>}/>
       <Route path="/add-ideas" element={ <Form/>}/>
   </Routes>
    </div>


</div>


  
  )
}

export default App
