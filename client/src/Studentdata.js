import Dropdown from "react-bootstrap/Dropdown";
import React, { useState, useEffect } from "react";
import './Studentdata.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Studentdata() {
  const [student, studentList] = useState([]);
  const [count, setcount] = useState();
  const [selectedValue, setSelectedValue] = useState(0);
  const [inputCount, setInputCount] = useState(0);

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
    const handleSelectionChange = (e) => {
      const value = parseInt(e.target.value);
      setSelectedValue(value);
      setInputCount(value);
    };
  return (
    <div>
      <Container/>
      <Row>
      <Col xs={6}>
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
      </Col>
      <br />
      <br />
      <br />
      <Col xs={6}>
      
      <select onChange={handleSelectionChange} className="selectme">
        <option value="0" >Select a number</option>
        <option value="1"  >1</option>
        <option value="2" >2</option>
        <option value="3" >3</option>
      </select>
      </Col>
      </Row>
      <Container/>
      {[...Array(inputCount)].map((_, index) => (
        <div key={index}>
          <select>
            <option value="0">Select an option</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
          &nbsp;&nbsp;
          <input type="text" placeholder={`Text Field ${index + 1}`}/>
        </div>
      ))}
      
      
    </div>
  );
}

export default Studentdata;
