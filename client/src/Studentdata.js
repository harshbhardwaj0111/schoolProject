import Dropdown from "react-bootstrap/Dropdown";
import React, { useState, useEffect } from "react";
import './Studentdata.css';
function Studentdata() {
  const [student, studentList] = useState([]);
  const [count, setcount] = useState();
  useEffect(() => {
    fetch("http://localhost:8080/getClassData")
      .then((response) => response.json())
      .then((result) => {
        console.log("Result is:", result);
        studentList(result.body);
      });
  }, []);
    function forName(){
        if(count==1)
            {

            }
    }
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          class
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {student.map((item) => (
            <Dropdown.Item href="#/action-1">{item.class}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <br />
      <br />
      <br />
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic2">
          Section
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setcount(1)}>1</Dropdown.Item>
          <Dropdown.Item onClick={() => setcount(2)}>2</Dropdown.Item>
          <Dropdown.Item onClick={() => setcount(3)}>3</Dropdown.Item>
          <Dropdown.Item onClick={() => setcount(4)}>4</Dropdown.Item>
          <Dropdown.Item onClick={() => setcount(5)}>5</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
      </table>
    </div>
  );
}

export default Studentdata;
