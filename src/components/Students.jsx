import { useState } from "react"
import { alumnosIniciales } from "../AlumnosIniciales"
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Search from "./Search";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



const Students = () => {
    
    const [studentsList, setStudentsList] = useState(alumnosIniciales)
    const [studentName, setStudentName] = useState("")
    const [studentEmail, setStudentEmail] = useState("")
     
    //Función al enviar el formulario
    const enviarFormulario = (e) => {
        e.preventDefault()
        if (studentName==="" || studentEmail===""){
          alert("Debes llenar todos los campos")
        }
        else{
        setStudentsList([...studentsList, {nombre: studentName, email: studentEmail}]) // Agregamos la tarea
        setStudentName("") // Vaciamos el formulario
        setStudentEmail("")
        }
    }
    //Función al escribir sobre el input del formulario
    const saveInputName = (e) => {
        setStudentName(e.target.value)
    }
    const saveInputEmail = (e) => {
        setStudentEmail(e.target.value)
        }
  
        
    return (
        <>
        <Container>
          <Row>
            <Col> <Search tasks = {studentsList} setTask = {setStudentsList}/> </Col>
            <Col>
              <Form onSubmit={enviarFormulario}>
              <h4>Agraga alumnos a la lista:</h4>
                <h3>Nombre:</h3>
                <input name="studentName" 
                onChange={saveInputName} 
                value={studentName}/>
                <h3>Email:</h3>
                <input name="studentEmail" 
                onChange={saveInputEmail} 
                value={studentEmail}/>
                <Button variant="primary" type="submit">Agregar Alumno</Button> 
              </Form>
            </Col>
          </Row>
        </Container>
       
        <Table striped bordered hover>
      <thead>
      <h1>Lista de Alumnos</h1>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
        </tr>
      </thead>
      <tbody>
        
          {studentsList.map(student => 
          <tr>
          <td key={student.nombre}>{student.nombre}</td>
          <td key={student.email}>{student.email}</td>
          </tr>)}
          </tbody>
    </Table>
    </>
  )
}

export default Students