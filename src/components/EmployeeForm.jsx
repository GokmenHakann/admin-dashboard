import { useState, useEffect } from "react";

function EmployeeForm({
    addEmployee,
    updateEmployee,
    editingEmployee
}) {


  const [employee, setEmployee] = useState({
    name:"",
    surname:"",
    department:"",
    position:"",
    salary:""
  });

 


  const handleChange = (e) => {

    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });

  };



  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingEmployee) {
        updateEmployee(employee);
    } else {
        addEmployee(employee);
    }

    setEmployee({
        name: "",
        surname: "",
        department: "",
        position: "",
        salary: ""
    });
};

   useEffect(() => {

    if (editingEmployee) {
        setEmployee(editingEmployee);
    }

}, [editingEmployee]);


  return (

    <div className="card">

      <div className="card-header">
        <h5>Yeni Personel</h5>
      </div>


      <div className="card-body">


        <form onSubmit={handleSubmit}>


          <input
          className="form-control mb-3"
          name="name"
          value={employee.name}
          onChange={handleChange}
          placeholder="Ad"
          />


          <input
          className="form-control mb-3"
          name="surname"
          value={employee.surname}
          onChange={handleChange}
          placeholder="Soyad"
          />


          <input
          className="form-control mb-3"
          name="department"
          value={employee.department}
          onChange={handleChange}
          placeholder="Departman"
          />


          <input
          className="form-control mb-3"
          name="position"
          value={employee.position}
          onChange={handleChange}
          placeholder="Pozisyon"
          />


          <input
          className="form-control mb-3"
          name="salary"
          value={employee.salary}
          onChange={handleChange}
          placeholder="Maaş"
          />


        <button className="btn btn-primary w-100">
            {editingEmployee ? "Güncelle" : "Personel Ekle"}
        </button>

        </form>


      </div>

    </div>

  );
}


export default EmployeeForm;