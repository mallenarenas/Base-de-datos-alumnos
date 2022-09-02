import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Search = (props) => {
  const [search, setSearch] = React.useState("");
  const [print, setPrint] = React.useState([]);
  // console.log("tareas", props.tasks);
  // console.log("settareas", props.setTask);
  const searchTask = (e) => {
    e.preventDefault();
    const filterTask = props.tasks.filter((task) => task.nombre === search);
    setPrint(filterTask);
    console.log(filterTask);
    console.log(search);
  };

  return (
    <Container>
        <Row>
            <Col>
            <form className="d-flex" role="search" onSubmit={searchTask}>
            <h4>Buscador de alumnos:</h4>
            <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
            />
            <Button className="btn" type="submit">
            Buscar
            </Button>
            </form>
            </Col>  
        </Row>
        {
        print
            ? print.map((item) => (
            <li className="list-group-item" key={item.nombre}>
              <h3>Resultado</h3>
              <span className="lead"> <strong>Nombre:</strong> { item.nombre} <strong>Correo:</strong> { item.email}</span>
            </li>
          ))
        : null
        }
    </Container>
  );
};

export default Search;