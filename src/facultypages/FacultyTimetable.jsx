import React from "react";

export default function FacultyTimetable() {
  const timetable = [
    {
      day: "Monday",
      p1: "DBMS",
      p2: "Web Full Stack",
      p3: "Java Full Stack",
      p4: "MongoDB",
    },
    {
      day: "Tuesday",
      p1: "Java Full Stack",
      p2: "DBMS",
      p3: "MongoDB",
      p4: "Web Full Stack",
    },
    {
      day: "Wednesday",
      p1: "MongoDB",
      p2: "Java Full Stack",
      p3: "DBMS",
      p4: "Web Full Stack",
    },
    {
      day: "Thursday",
      p1: "Web Full Stack",
      p2: "MongoDB",
      p3: "Java Full Stack",
      p4: "DBMS",
    },
    {
      day: "Friday",
      p1: "DBMS",
      p2: "Web Full Stack",
      p3: "MongoDB",
      p4: "Java Full Stack",
    },
  ];

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-[800px]">

        <h2 className="text-2xl font-bold text-center text-[#5b7cfa] mb-6">
          Faculty Timetable
        </h2>

        <table className="w-full border border-gray-300">

          <thead>
            <tr className="bg-[#5b7cfa] text-white">
              <th className="p-3 border">Day</th>
              <th className="p-3 border"> 1</th>
              <th className="p-3 border"> 2</th>
              <th className="p-3 border"> 3</th>
              <th className="p-3 border"> 4</th>
            </tr>
          </thead>

          <tbody>
            {timetable.map((row, index) => (
              <tr key={index} className="text-center hover:bg-gray-100">
                <td className="p-3 border font-semibold">{row.day}</td>
                <td className="p-3 border">{row.p1}</td>
                <td className="p-3 border">{row.p2}</td>
                <td className="p-3 border">{row.p3}</td>
                <td className="p-3 border">{row.p4}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
}