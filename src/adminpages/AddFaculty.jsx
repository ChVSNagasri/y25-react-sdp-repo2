import React, { useState ,useEffect} from "react";
import "./addfaculty.css";
import facultydata from "./faculty.json";

export default function AddFacultyt() {
  const [faculty, setFaculty] =useState(() => {
    const storedData = localStorage.getItem("faculty");
    return storedData ? JSON.parse(storedData) : facultydata;
  });
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [course, setCourse] = useState("")
   useEffect(() => {
    localStorage.setItem("faculty", JSON.stringify(faculty));
  }, [faculty]);
  const handleAdd = () => {
    if (!id  || !name || !course) {
      alert("Please fill all fields")
      return;
    }
    const newFaculty = {
      id: id,
      name: name,
      course: course
    };
    setFaculty([...faculty, newFaculty])
    setId("")
    setName("")
    setCourse("")
  }
  return (
    <div className="container">
      <div className="card">
        <h2>Add Faculty</h2>
    <input placeholder="ID" value={id} onChange={(e) => setId(e.target.value)}/>
    <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
   <input placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)}/>
   <br/>
        <button onClick={handleAdd}>Add Faculty</button>
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
          {faculty.map((value, index) => (
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