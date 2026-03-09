import React, { useState, useEffect } from "react";

export default function MarksAllotment() {

  const defaultStudents = [
    { id: 1, name: "Nagasri", marks: "" },
    { id: 2, name: "Mokthika", marks: "" },
    { id: 3, name: "Ananya", marks: "" },
    { id: 4, name: "Prashanthi", marks: "" }
  ];
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const storedMarks = localStorage.getItem("facultyMarks");

    if (storedMarks) {
      setStudents(JSON.parse(storedMarks));
    } else {
      setStudents(defaultStudents);
    }
  }, []);

  const handleMarksChange = (index, value) => {
    const updatedStudents = [...students];
    updatedStudents[index].marks = value;
    setStudents(updatedStudents);
  };

  const handleSubmit = () => {
    localStorage.setItem("facultyMarks", JSON.stringify(students));
    alert("Marks saved successfully!");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white shadow-lg rounded-xl p-8 w-[700px]">

        <h2 className="text-2xl font-bold text-center text-[#5b7cfa] mb-6">
          Award Student Marks
        </h2>

        <table className="w-full border border-gray-300">

          <thead>
            <tr className="bg-[#5b7cfa] text-white">
              <th className="p-3 border">Student ID</th>
              <th className="p-3 border">Student Name</th>
              <th className="p-3 border">Marks</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr key={student.id} className="text-center hover:bg-gray-100">

                <td className="p-3 border">{student.id}</td>

                <td className="p-3 border">{student.name}</td>

                <td className="p-3 border">
                  <input type="number" value={student.marks} onChange={(e) =>handleMarksChange(index, e.target.value)}
                    className="border rounded px-2 py-1 w-24 text-center"
                    placeholder="Marks"/>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

        <div className="flex justify-center mt-6">
    <button onClick={handleSubmit} className="bg-[#5b7cfa] text-white px-6 py-2 rounded hover:bg-blue-600">
            Save Marks
          </button>
        </div>

      </div>

    </div>
  );
}