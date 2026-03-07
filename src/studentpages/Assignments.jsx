import React, { useState, useEffect } from 'react'; 
import assignmentdata from './assignment.json';
import './assignments.css';

export default function Assignments() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    localStorage.setItem('assignments', JSON.stringify(assignmentdata))
    const storedAssignments = JSON.parse(localStorage.getItem('assignments'))
    setAssignments(storedAssignments)
  }, [])

  return (
    <div className="assignment-wrapper">
      {assignments.map((item, index) => (
        <div className="assignment-card" key={index}>
          <div className="card-image-wrapper">
            <img src={item.img} alt={item.Course} className="card-image" />
            <button className="percentage-btn">Completed: {item.percentage}</button>
          </div>
          <div className="card-content">
            <h3>{item.Course}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}