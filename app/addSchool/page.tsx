"use client";
import { useForm } from "react-hook-form";

export default function AddSchool() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    // Existing schools ni localStorage nundi theesukuni
    const existingSchools = JSON.parse(localStorage.getItem("schools") || "[]");
    // New school ni add cheyyi
    existingSchools.push(data);
    // Malli save cheyyi
    localStorage.setItem("schools", JSON.stringify(existingSchools));

    alert("School added successfully!");
    reset(); // Form clear cheyyadaniki
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add School</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true })} placeholder="School Name" />
        <br />
        <input {...register("address", { required: true })} placeholder="Address" />
        <br />
        <input {...register("city", { required: true })} placeholder="City" />
        <br />
        <input {...register("state", { required: true })} placeholder="State" />
        <br />
        <input type="number" {...register("contact", { required: true })} placeholder="Contact" />
        <br />
        <input type="email" {...register("email_id", { required: true })} placeholder="Email" />
        <br />
        <button type="submit">Add School</button>
      </form>
    </div>
  );
}