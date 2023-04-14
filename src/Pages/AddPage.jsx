import React from 'react'
// import { useDispatch } from "react-redux";
// import { addUser } from "./usersSlice";
import Form from '../Components/Form'
function AddPage() {
    // const dispatch = useDispatch();
   
    
    // const handleAddUser = (data) => {
    //   dispatch(addUser(data));
    // };
  return (
    <div className=" h-screen w-full bg-[#f5e9e2] "  >
    <div className="h-20 w-screen bg-[#e3b5a4]">
     <p className="flex justify-center content-center p-7 text-gray-50 text-lg font-sans font-bold ">SparkShare</p>
    </div>
    <div>
   <h1 className="text-center text-lg font-serif p-11">Share Your Business Ideas: Let's Build Something Great Together!</h1>
    <Form 
    // onSubmit={handleAddUser}
    />
    </div>
    {/* <div>
     <Table data={users} onDelete={handleDeleteUser} onEdit={handleEditUser}   /> 
    </div> */}


</div>
  )
}

export default AddPage
