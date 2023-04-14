import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";

import Button from "./Button";
import { editIdea } from "../Store/ideaSlice";

function EditForm() {
  const params = useParams();
  const dispatch = useDispatch();
  const data = useSelector((store) => store.ideas);
  const navigate = useNavigate();
  const existingIdea = data.filter((idea) => idea.id === params.id);
  const { name, idea } = existingIdea[0];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(
      editIdea({
        id: params.id,
        name: data.name,
        idea: data.idea,
      })
    ),
      navigate("/");
    message.success(" Successfully Updated");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-center text-left content-center mb-4 ">
        <div className="flex flex-col gap-1 ">
          <label htmlFor="name" className="font-medium ">
            Enter your Name
          </label>
          <input
            type="text"
            id="name"
            defaultValue={name}
            name="name"
            className="w-60"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p className="errorMsg text-red-600">Please check the Name</p>
          )}
          <label htmlFor="idea" className="font-medium mt-5">
            Share Your Ideas
          </label>
          <textarea
            defaultValue={idea}
            id="idea"
            name="idea"
            {...register("idea", { required: true })}
          />
          {errors.idea && (
            <p className="errorMsg text-red-600">Please check the ideas</p>
          )}

          <div className="flex justify-between">
            <Button>Update</Button>
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

export default EditForm;
