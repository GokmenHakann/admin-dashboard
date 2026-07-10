function EmployeeTable({
    employees,
    deleteEmployee,
    editEmployee
}) {

  return (
    <div className="card">

      <div className="card-header">
        <h5>Personel Listesi</h5>
      </div>


      <div className="card-body">

        <table className="table table-striped">

          <thead>
            <tr>
              <th>Ad</th>
              <th>Soyad</th>
              <th>Departman</th>
              <th>Pozisyon</th>
              <th>Maaş</th>
              <th>İşlem</th>
            </tr>
          </thead>


          <tbody>

            {
              employees.length === 0 ? (

                <tr>
                  <td colSpan="6" className="text-center">
                    Henüz personel eklenmedi
                  </td>
                </tr>

              ) : (

                employees.map((employee) => (

                  <tr key={employee.id}>

                    <td>{employee.name}</td>

                    <td>{employee.surname}</td>

                    <td>{employee.department}</td>

                    <td>{employee.position}</td>

                    <td>{employee.salary} ₺</td>

                    <td>

                    <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => editEmployee(employee)}
                        >
                        Düzenle
                    </button>

                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteEmployee(employee.id)}
                        >
                        Sil
                    </button>

                    </td>

                  </tr>

                ))

              )
            }


          </tbody>

        </table>


      </div>

    </div>
  );
}


export default EmployeeTable;