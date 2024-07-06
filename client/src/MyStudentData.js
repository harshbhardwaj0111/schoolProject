import Dropdown from "react-bootstrap/Dropdown";
import React, { useState, useEffect } from "react";
import './Studentdata.css';
function MyStudentdata() {
  const [student, studentList] = useState([]);
  const [count, setCount] = useState(0);
  const [data, setData] = useState();
  const [medium, setMedium] = useState();
  const [name, setName] = useState();

  useEffect(() => {
    fetch("http://localhost:8000/getClassData")
      .then((response) => response.json())
      .then((result) => {
        console.log("Result is:", result);
        studentList(result.body);
      });
  }, []);

  function postData(e){

  }

  return (
    <div>
      <select onChange={(e)=>setData(e.target.value)}>
          <option>Class</option>
          {
            student.map((item) => (
              <option value={item.class}>{item.class}</option>
          ))}
       </select>
       <br /><br />
      <select onChange={(e)=>setCount(parseInt(e.target.value))} style={{ width: "50%" }}>
        <option value="0">Section</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <br />
      <br />
      {[...Array(count)].map((_, index) => (
        <div key={index}>
          <select onChange={(e)=>setMedium(e.target.value)}>
            <option value="0">Select an option</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="text" placeholder="Enter Section name" height="400%" onChange={(e)=>setName(e.target.value)}/><br />
        </div>
      ))}
      

      <table>
        <tr>
          <th>Id</th><th>Class</th><th>Section</th><th>Medium</th>
        </tr>
        {

        }
      </table>
    </div>
  );
}

export default MyStudentdata;
