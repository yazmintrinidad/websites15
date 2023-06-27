import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import DeleteIcon from '@mui/icons-material/Delete';
import {  Table,  Button,  Container,  Modal,  ModalHeader,  ModalBody,  FormGroup,  ModalFooter,
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

<DeleteIcon  
color= "red"/>

const data = [
  { id: 1, NOMBRE: "Wlogan", APELLIDO: "Essence " , CORREO:"wlogan13@gmail.com",TELEFONO:"67565676"},
  { id: 2, NOMBRE: "Rosa", APELLIDO: "Choque" ,CORREO:"rosa345@gmail.com", TELEFONO:"63673268"},
 
];



class App extends React.Component {
  
  state = {
    data: data,
    modalInsertar: false,
    form: {
      id: "",
      NOMBRE: "",
      APELLIDO: "",
      CORREO: "",
      TELEFONO:"",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };
  
  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].NOMBRE = dato.NOMBRE;
        arreglo[contador].APELLIDO = dato.APELLIDO;
        arreglo[contador].CORREO = dato.CORREO;
        arreglo[contador].TELEFONO = dato.TELEFONO;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };
  
  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar al Cliente "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
   

   
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
       <>
       {
      
      <div align='right' border='1px' class="MuiInputBase-root MuiInputBase-colorPrimary css-1br2x8"><input  aling ='right' autofocus="" placeholder=" 🔍 búsqueda…" type="text" aria-label="iconos de busqueda" class="MuiInputBase-input css-mnn31" value=""/></div>


 }
        <Container align="right" >
        
        <br />
        <div><h3 align="left">Frasier</h3></div>
          <Button  color="success" onClick={()=>this.mostrarModalInsertar()} >Agregar Cliente</Button>
          
          <br />
          <br />
          <Table >
            <thead >
              <tr align="center">
                <th>ID</th>
                <th>NOMBRE</th>
                <th>APELLIDO</th>
                <th >CORREO ELECTRÓNICO</th>
                <th>TELÉFONO</th>
                <th>ACCIÓN</th>
              </tr>
            </thead>
            <tbody align="center">
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.NOMBRE}</td>
                  <td>{dato.APELLIDO}</td>
                  <td>{dato.CORREO}</td>
                  <td>{dato.TELEFONO}</td>
                  <td>
                    <Button color="danger" border="0px"
                      onClick={() => this.mostrarModalActualizar(dato)}>Historial</Button>
                    <Button  color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>

                  </td>
                </tr>
              ))}
            </tbody>
            
          </Table>
        </Container>
        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                NOMBRE: 
              </label>
              <input
                className="form-control"
                name="NOMBRE"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.NOMBRE}
              />
            </FormGroup>
            <FormGroup>
              <label>
                APELLIDO: 
              </label>
              <input
                className="form-control"
                name="APELLIDO"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.APELLIDO}
              />
            </FormGroup>
            <FormGroup>
              <label>
                CORREO: 
              </label>
              <input
                className="form-control"
                name="CORREO"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.CORREO}
              />
            </FormGroup>
            <FormGroup>
              <label>
              TELEFONO: 
              </label>
              <input
                className="form-control"
                name="TELEFONO"
                type="numeric"
                onChange={this.handleChange}
                value={this.state.form.TELEFONO}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Cliente</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                NOMBRE: 
              </label>
              <input
                className="form-control"
                name="NOMBRE"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                APELLIDO: 
              </label>
              <input
                className="form-control"
                name="APELLIDO"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                CORREO: 
              </label>
              <input
                className="form-control"
                name="CORREO"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
              TEELFONO: 
              </label>
              <input
                className="form-control"
                name="TELEFONO"
                type="numeric"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default App;
