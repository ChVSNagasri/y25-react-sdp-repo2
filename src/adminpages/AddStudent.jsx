import React, { useState,useEffect } from "react";
import "./addstudent.css";
import studentdata from "./students.json";

export default function AddStudent() {
  const [students, setStudents] = useState(() => {
    const storedData = localStorage.getItem("student");
    return storedData ? JSON.parse(storedData) : studentdata;
  });

  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [course, setCourse] = useState("")
  useEffect(() => {
    localStorage.setItem("student", JSON.stringify(students));
  }, [students]);
  const handleAdd = () => {
    if (!id  || !name || !course) {
      alert("Please fill all fields")
      return;
    }
    const newStudent = {
      id: id,
      name: name,
      course: course
    };
    setStudents([...students, newStudent])
    setId("")
    setName("")
    setCourse("")
  }
  return (
    <div className="container">
      <div className="card">
        <h2>Add Student</h2>
    <input placeholder="ID" value={id} onChange={(e) => setId(e.target.value)}/>
    <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
   <input placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)}/>
   <br/>
        <button onClick={handleAdd}>Add Student</button>
      </div>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>COURSE</th>
          </tr>
        </thead>

        <tbody>
          {students.map((value, index) => (
            <tr key={index}>
              <td>{value.id}</td>
              <td>{value.name}</td>
              <td>{value.course}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}