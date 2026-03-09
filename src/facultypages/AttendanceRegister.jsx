import React, { useState, useEffect } from "react";

export default function FacultyAttendance() {

  const defaultStudents = [
    { id: 1, name: "Ch.Nagasri", status: "" },
    { id: 2, name: "M.Ananya", status: "" },
    { id: 3, name: "K.Mokthika", status: "" },
    { id: 4, name: "R.Bob Smith", status: "" },
    { id: 5, name: "Ch.Alice", status: "" },
    { id: 6, name: "Y.Jahnavi", status: "" },
    { id: 7, name: "P.Prashanthi", status: "" },
    { id: 8, name: "K.Tapasyani", status: "" }
  ];

  const [students, setStudents] = useState([]);

  // Load attendance from localStorage
  useEffect(() => {
    const storedAttendance = localStorage.getItem("facultyAttendance");

    if (storedAttendance) {
      setStudents(JSON.parse(storedAttendance));
    } else {
      setStudents(defaultStudents);
    }
  }, []);

  const handleAttendanceChange = (index, value) => {
    const updatedStudents = [...students];
    updatedStudents[index].status = value;
    setStudents(updatedStudents);
  };

  const handleSubmit = () => {
    localStorage.setItem("facultyAttendance", JSON.stringify(students));
    alert("Attendance saved successfully!");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white shadow-lg rounded-xl p-8 w-[700px]">

        <h2 className="text-2xl font-bold text-center text-[#5b7cfa] mb-6">
          Attendance Register
        </h2>

        <table className="w-full border border-gray-300">

          <thead>
            <tr className="bg-[#5b7cfa] text-white">
              <th className="p-3 border">Student ID</th>
              <th className="p-3 border">Student Name</th>
              <th className="p-3 border">Attendance</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr key={student.id} className="text-center hover:bg-gray-100">

                <td className="p-3 border">{student.id}</td>

                <td className="p-3 border">{student.name}</td>

                <td className="p-3 border">

    <select value={student.status} onChange={(e) => handleAttendanceChange(index, e.target.value) }
                    className="border rounded px-2 py-1" >

                    <option value="">Select</option>
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>

                  </select>

                </td>

              </tr>
            ))}
          </tbody>

        </table>

        <div className="flex justify-center mt-6">

          <button  onClick={handleSubmit}
            className="bg-[#5b7cfa] text-white px-6 py-2 rounded hover:bg-blue-600">
            Save Attendance
          </button>

        </div>

      </div>

    </div>
  );
}