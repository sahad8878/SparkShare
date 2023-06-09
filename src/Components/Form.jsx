import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { message } from "antd";
import { addIdea } from "../Store/ideaSlice";
import Button from "./Button";
function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const currentData = new Date();

    dispatch(
      addIdea({
        id: uuidv4(),
        date: currentData.toLocaleDateString(),
        name: data.name,
        idea: data.idea,
      })
    );
    navigate("/");
    message.success("Idea successfully submitted");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-center text-left  content-center ">
        <div className="flex flex-col gap-1 ">
          <label htmlFor="name" className="font-medium">
            Enter your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-60"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p className="errorMsg text-red-500">Please check the Name</p>
          )}
          <label htmlFor="idea" className="font-medium mt-5">
            Enter Your Ideas
          </label>
          <textarea
            id="idea"
            name="idea "
            {...register("idea", { required: true })}
          />
          {errors.idea && (
            <p className="errorMsg text-red-600">Please check the ideas</p>
          )}

          <div className="flex justify-between">
            <Button>submint</Button>
            <div>
              <Link to="/">
                <Button>Back</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
