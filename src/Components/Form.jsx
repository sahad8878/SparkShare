import React from 'react'
import { useForm } from "react-hook-form";

function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        console.log(data,"data");
        // props.onSubmit(data);
      }
  return (


    <form onSubmit={handleSubmit(onSubmit)}>
    <div className='flex justify-center text-center content-center '> 
    <div className='flex flex-col '>
      <label htmlFor="ideas" className='font-medium'>Enter your  Name</label>
      <input type="text" id='name' name='name' className='w-60' 
       {...register("name", { required: true})}
      />
      {errors.name && <p className="errorMsg">Please check the Name</p>}
      <label htmlFor="ideas" className='font-medium'>Enter Your Ideas</label>
      <textarea id='ideas' name='ideas ' 
       {...register("ideas", { required: true})}
      />
      {errors.ideas && <p className="errorMsg">Please check the ideas</p>}

      <div>
      <button type='submit' className=' mt-3 px-7 border-2 rounded-md bg-gray-400 text-black'>Submit</button>
      </div>
    </div>
    </div>
  </form>
  )
}

export default Form
