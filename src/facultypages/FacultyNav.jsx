import React from 'react'
import { Route, Routes, useNavigate,Link } from 'react-router-dom'
import FacultyHome from './FacultyHome'
import FacultyTimetable from './FacultyTimetable'
import MarksAllotment from './MarksAllotment'
import AttendanceRegister from './AttendanceRegister'
import './facultynav.css'
import Notfound from '../Notfound'
export default function FacultyNav() 
{
     const navigate=useNavigate()
  return (
   
    <div className="main-container">
<nav className="navers">
      <button><Link to="/navers">🏠Home</Link></button>
      <button><Link to="/navers/facultytimetables">📅Timetable</Link></button>
      <button><Link to="/navers/marksallotments">📊Reward Marks</Link></button>
      <button><Link to="/navers/attendanceregisters">✅Register</Link></button>
      <button onClick={()=>navigate("/")}>🔒Logout</button>
</nav>
            <div className="content">
        <Routes>
            <Route index element={<FacultyHome/>}/>
            <Route path="facultytimetables" element={<FacultyTimetable/>}/>
            <Route path="marksallotments" element={<MarksAllotment/>}/>
            <Route path="attendanceregisters" element={<AttendanceRegister/>}/>
             <Route path="*" element={<Notfound/>}/>
        </Routes>
    </div>
    </div>
  )
}
