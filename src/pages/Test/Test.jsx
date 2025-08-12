import { Container } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const Test = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = React.useState("");

  const onSubmitHandler = (values) => {
    alert(JSON.stringify(values));
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <input {...register("firstName")} placeholder="First name" />
      <select {...register("category", { required: true })}>
        <option value="">Select...</option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
      </select>
      <textarea {...register("aboutYou")} placeholder="About you" />
      <p>{data}</p>
      <input type="submit" />
    </form>
  );
};

export default Test;
