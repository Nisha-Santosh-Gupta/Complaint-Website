import React, { useEffect, useState } from "react";
import "../pages/AllComplaints.css";

function AllComplaints() {
  const [data, setData] = useState([]);

  useEffect(() => {
    
    const url = process.env.BACKEND
    fetch(url+"api/list")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <h2 id="heading">Complaints</h2>
      <div class="para" >
        {data.map((data) => (
          <div key={data._id}>
            <p><b>{data.title}</b></p>
            <p><b>Description:-</b>{data.description}</p>
            <p><b>Location:-</b>{data.location}</p>
            <p><b>Contact:-</b>+91{data.contactNo}</p>
            <p>{data.complainerName}</p>
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllComplaints;
