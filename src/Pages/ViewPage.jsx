import React from 'react'
// import { useDispatch, useSelector } from "react-redux";
// import { deleteUser, editUser, selectUsers } from "./usersSlice";
import Table from '../Components/Table'
import Button from '../Components/Button'
function ViewPage() {
    // const dispatch = useDispatch();
    // const users = useSelector(selectUsers);
    // const handleDeleteUser = (email) => {
    //     console.log(email,"delete");
    //     dispatch(deleteUser(email));
    //   };
      
    //   const handleEditUser = (data) => {
    //     console.log(data,"edit");
    //     dispatch(editUser(data));
    //   };
    

  return (
    <div className=" h-screen w-full bg-[#f5e9e2] "  >
    <div className="h-20 w-screen bg-[#e3b5a4]">
     <p className="flex justify-center content-center p-7 text-gray-50 text-lg font-sans font-bold ">SparkShare</p>
    </div>
   <h1 className="text-center text-lg font-serif pt-11">Share Your Business Ideas: Let's Build Something Great Together!</h1>
    {/* <div>
    <Form onSubmit={handleAddUser}/>
    </div> */}

    <div className='flex justify-center'>

    <Button>Add Your Ideas</Button>
    </div>
    <div >
     <Table 
    //  data={users} onDelete={handleDeleteUser} onEdit={handleEditUser}  
      /> 
    </div>


</div>
  )
}

export default ViewPage
