"use client";
import { useEffect, useState } from "react";

type School = {
  name: string;
  address: string;
  city: string;
  state: string;
  students: number;
};

export default function ShowSchools() {
  const [schools, setSchools] = useState<School[]>([]);

  useEffect(() => {
    const savedSchools: School[] = JSON.parse(localStorage.getItem("schools") || "[]");
    setSchools(savedSchools);
  }, []);

  return (
    <div>
      <h1>All Schools</h1>
      {schools.length === 0 ? (
        <p>No schools found.</p>
      ) : (
        <ul>
          {schools.map((school, index) => (
            <li key={index}>
              <strong>{school.name}</strong> — {school.address}, {school.city}, {school.state}  
              (Students: {school.students})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}