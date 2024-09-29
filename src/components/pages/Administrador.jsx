import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";



const Administrador = () => {
    return (
        <section  className="mainSection">
           <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Recetas Disponibles</h1>
        <Link className="btn btn-primary" to='/administrador/crear'>
        <i className="bi bi-file-earmark-plus"></i> Nueva Receta
        </Link>
      </div>

        <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
        </section>
    );
};

export default Administrador;