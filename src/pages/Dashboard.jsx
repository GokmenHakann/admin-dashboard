import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";


function Dashboard() {

  const [employees, setEmployees] = useState(() => {
  const savedEmployees = localStorage.getItem("employees");
  return savedEmployees ? JSON.parse(savedEmployees) : [];
    });

    const [editingEmployee, setEditingEmployee] = useState(null);

  const addEmployee = (employee) => {
    setEmployees([
      ...employees,
      {
        ...employee,
        id: Date.now()
      }
    ]);
  };

    const deleteEmployee = (id) => {
    setEmployees(
        employees.filter((employee) => employee.id !== id)
    );
    };

    const editEmployee = (employee) => {
    setEditingEmployee(employee);
    };

    const updateEmployee = (updatedEmployee) => {
    setEmployees(
        employees.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee
        )
    );

  setEditingEmployee(null);
    };

    useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
    }, [employees]);


  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <div className="row">

          <div className="col-md-4">
           <EmployeeForm
            addEmployee={addEmployee}
            updateEmployee={updateEmployee}
            editingEmployee={editingEmployee}
            />
          </div>

          <div className="col-md-8">
            <EmployeeTable
                employees={employees}
                deleteEmployee={deleteEmployee}
                editEmployee={editEmployee}
            />
          </div>


        </div>
      </div>
    </>
  );
}

export default Dashboard;