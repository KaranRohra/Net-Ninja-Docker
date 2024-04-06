import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

function App() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/')
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data);
      })
      .catch((err) => {
        console.log(err);
        setEmployees([]);
      });
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td>{emp.position}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
