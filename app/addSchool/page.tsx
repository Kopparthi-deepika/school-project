"use client";
import { useForm } from "react-hook-form";

type School = {
  name: string;
  address: string;
  city: string;
  state: string;
  students: number;
};

export default function AddSchool() {
  const { register, handleSubmit, reset } = useForm<School>();

  const onSubmit = (data: School) => {
    const existingSchools: School[] = JSON.parse(localStorage.getItem("schools") || "[]");
    existingSchools.push(data);
    localStorage.setItem("schools", JSON.stringify(existingSchools));
    alert("School added successfully!");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Add School</h1>
      <input {...register("name")} placeholder="Name" />
      <input {...register("address")} placeholder="Address" />
      <input {...register("city")} placeholder="City" />
      <input {...register("state")} placeholder="State" />
      <input type="number" {...register("students")} placeholder="No. of Students" />
      <button type="submit">Add</button>
    </form>
  );
}