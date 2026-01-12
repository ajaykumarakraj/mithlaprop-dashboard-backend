// src/pages/Dashboard.js
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const Dashboard = () => {
const [data,setData]=useState(null)
    useEffect(()=>{
getdata()
    },[])
const getdata = async()=>{
    try {
        const response= await axios.get("https://api.squarebigha.com/api/dashboard-data",
           {
            headers:{
                Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwMTk5MjgxNi1kZDUxLTcyMDEtYWY5MC1iNTZiYmNiMGVmNDEiLCJqdGkiOiIzOTUzMTUxNjQyOWM1MzZiZmM1NjQyOTQ2ODNhYTYxNzc0NTgxZjRmZmU4NjE5NzNiZWQ0Mjk1OTdlYzQzZjM5NTk5ZDQ0Yjc4MjgyNWMxMyIsImlhdCI6MTc1NzQxNzk0Ni45Mjk3NzEsIm5iZiI6MTc1NzQxNzk0Ni45Mjk3NzMsImV4cCI6MTc4ODk1Mzk0Ni45MjQ1OTUsInN1YiI6IjIiLCJzY29wZXMiOltdfQ.qL6E9AzHFXC74-XRr0-KhAao4jWisTvyeri3eUXTEFV_Hp6DTylDISB1eeDsyaStrMIfk89EjMVaClE16WbYBKGVpHSnKOaDT56ubfb7DcrHAh50BTLTTIgYyf_Gbop_pnHFkOjbFc03SgKLWHJ8PpQlShiIxtXBA2eQX5bEkYHit0eZYN0bQdjtiu8YFvhubG9OMee-r95Cc8nXRdiC3gkXw0POWjwoCev9BNFHZ8UfdgXZMjxDVo4R_fFdWTeeicFjchFxYuRb7zm1aU8OUFyc4ozNJUC6Wix4hUARjUTmIfZ5mfEq5TDQWD0AM-ERfP8tIkkoTbDqqASU2Mg6LJ4p6nUXUqAuql4sDbmRKVlB04N15xV62LHWJTgT71JfA_bgZHFJGDUQD1c53vCwqEbZUSrMMAOXF6mllBmm1baKdqiocEm9_QldIWT2U07zmYGG4PBU2N3pBmMXftZDFu-xOPBSdB7dsz9KEUeY_gLDoupX9JwgQY8aNT-lwlcb9c0tguDdLWS2cU1LY180kfF0R7QeRq5UpCyb27COT7LNu9R9sl_KMcmLnxtzhNWA-YZeS9h3sKlimso6GO3VgTevyWaVyAs4nCNxP7kAP7FdlG-ckIUEuwsFmvV5pBGu65VB8hG9n3mha-zi7oRlqm4ltkGNLVZR4pX9iBN1Z6g"
            }
           }
        )
       if(response.data.status==200){
         setData(response.data.data)
        // console.log(response.data.status)
       }
    } catch (error) {
        console.log(error)
    }
}



   const metrics = data
  ? [
      {
        title: "Total Users",
        value: data.total_user,
        icon: "👥",
        bg: "#f1f3f5",
        color: "#343a40",
      },
      {
        title: "Approved Residential",
        value: data.approved_residential,
        icon: "🏠",
        bg: "#e6fffa",
        color: "#065f46",
      },
      {
        title: "Pending Residential",
        value: data.pending_residential,
        icon: "⏳",
        bg: "#fff7ed",
        color: "#9a3412",
      },
      {
        title: "Approved Commercial",
        value: data.approved_commercial,
        icon: "🏢",
        bg: "#eff6ff",
        color: "#1e40af",
      },
      {
        title: "Pending Commercial",
        value: data.pending_commercial,
        icon: "📌",
        bg: "#fef2f2",
        color: "#991b1b",
      },
      {
        title: "Enquiry Approved",
        value: data.enquiry_approve,
        icon: "✅",
        bg: "#ecfdf5",
        color: "#047857",
      },
      {
        title: "Enquiry Pending",
        value: data.enquiry_pending,
        icon: "📨",
        bg: "#fdf4ff",
        color: "#86198f",
      },
    ]
  : [];

// console.log("get data",Data)
    return (
       <div className="container mt-4">
  <h3 className="mb-4 fw-semibold">📊 CRM Dashboard Overview</h3>

  <div className="row">
    {metrics.map((item, index) => (
      <div key={index} className="col-md-6 col-lg-3 mb-4">
        <div
          className="card border-0 shadow-sm h-100"
          style={{ backgroundColor: item.bg }}
        >
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <div
                className="fs-1"
                style={{ color: item.color }}
              >
                {item.icon}
              </div>

              <div className="text-end">
                <p className="mb-1 text-muted small">
                  {item.title}
                </p>
                <h4
                  className="fw-bold mb-0"
                  style={{ color: item.color }}
                >
                  {item.value ?? 0}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    );
};

export default Dashboard;
