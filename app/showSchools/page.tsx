"use client";
import { useEffect, useState } from "react";

export default function ShowSchools() {
  const [schools, setSchools] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("schools") || "[]");
    setSchools(data);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>School List</h1>
      {schools.length === 0 ? (
        <p>No schools found. Please add one.</p>
      ) : (
        schools.map((school, index) => (
          <div key={index} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h2>{school.name}</h2>
            <p>{school.address}, {school.city}, {school.state}</p>
            <p>Contact: {school.contact}</p>
            <p>Email: {school.email_id}</p>
          </div>
        ))
      )}
    </div>
  );
}