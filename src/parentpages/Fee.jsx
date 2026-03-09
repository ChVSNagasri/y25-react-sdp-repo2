import React, { useState } from "react";
import "./fee.css";

export default function Fee() {

  const [fees, setFees] = useState([
    { id: 1, type: "Tuition Fee", amount: 50000, status: "Pending" },
    { id: 2, type: "Hostel Fee", amount: 15000, status: "Paid" },
    { id: 3, type: "Lab Fee", amount: 5000, status: "Pending" },
    { id: 4, type: "Library Fee", amount: 2000, status: "Paid" }
  ]);

  const handlePay = (id) => {
    const updatedFees = fees.map((fee) => {
      if (fee.id === id) {
        return { ...fee, status: "Paid" };
      }
      return fee;
    });

    setFees(updatedFees);
    alert("Payment Successful");
  };

  return (
    <div className="fee-container">
      <h1>Fee Summary</h1>

      <table className="fee-table">
        <thead>
          <tr>
            <th>Fee Type</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {fees.map((fee, index) => (
            <tr key={index}>
              <td>{fee.type}</td>
              <td>{fee.amount}</td>
              <td style={{color: fee.status === "Paid" ? "green" : "red"}}>
                {fee.status}
              </td>
              <td>
                {fee.status === "Pending" ? (
                  <button onClick={() => handlePay(fee.id)}>Pay</button>
                ) : (
                  "Paid"
                )}
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}