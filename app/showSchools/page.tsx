"use client";
import { useEffect, useState } from "react";

export default function ShowSchools() {
  const [schools, setSchools] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/schools")
      .then((res) => res.json())
      .then((data) => setSchools(data));
  }, []);

  return (
    <div>
      <h1>Schools List</h1>
      {schools.length === 0 ? (
        <p>No schools found</p>
      ) : (
        <table border={1} cellPadding={5}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>No of Students</th>
            </tr>
          </thead>
          <tbody>
            {schools.map((s, i) => (
              <tr key={i}>
                <td>{s.name}</td>
                <td>{s.address}</td>
                <td>{s.city}</td>
                <td>{s.state}</td>
                <td>{s.students}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}