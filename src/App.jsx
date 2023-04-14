import Form from "./Components/Form"
import Table from "./Components/Table"


function App() {


  return (
    <div className=" h-screen w-full bg-[#f5e9e2] "  >

         <div className="h-20 w-screen bg-[#e3b5a4]">
          <p className="flex justify-center content-center p-7 text-gray-50 text-lg font-sans font-bold ">SparkShare</p>
         </div>
         <div>
         <Form/>
         </div>
         <div>
          <Table/>
         </div>
    </div>
  )
}

export default App
