import Dropdown from "react-bootstrap/Dropdown";
import React, { useState, useEffect } from "react";
import './Studentdata.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Studentdata() {
  const [student, studentList] = useState([]);
<<<<<<< HEAD
  const [count, setcount] = useState();
  const [selectedValue, setSelectedValue] = useState(0);
  const [inputCount, setInputCount] = useState(0);
=======
  const [count, setCount] = useState(0);
  const [data, setData] = useState();
  const [medium, setMedium] = useState();
  const [name, setName] = useState();
>>>>>>> ff28695081c58416a8bb0eddb911773efb596b0e

  useEffect(() => {
    fetch("http://localhost:8000/getClassData")
      .then((response) => response.json())
      .then((result) => {
        console.log("Result is:", result);
        studentList(result.body);
      });
  }, []);
<<<<<<< HEAD
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
=======

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
>>>>>>> ff28695081c58416a8bb0eddb911773efb596b0e
            <option value="0">Select an option</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
<<<<<<< HEAD
          </select>
          &nbsp;&nbsp;
          <input type="text" placeholder={`Text Field ${index + 1}`}/>
        </div>
      ))}
      
      
=======
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
>>>>>>> ff28695081c58416a8bb0eddb911773efb596b0e
    </div>
  );
}

export default Studentdata;
