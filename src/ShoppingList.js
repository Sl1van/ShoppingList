import React from "react";
import { Button, Col, Container, Form, FormControl, InputGroup } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import useLocalStorage from './useLocalStorage';

function ShoppingList() {
  const [items, setItems] = useLocalStorage("shoppinglist", [{ id: 0, name: "", amount: 1, isDone: false, date: new Date()}]);

  function deleteEntryByID(id) {
    setItems(items.filter(entry => entry.id !== id));
  }

  const addHandler = () => {
    setItems([...items, { id: items.length !== 0 ? Math.max(...items.map((l) => l.id)) + 1 : 0, name: "", amount: 1, isDone: false, date: new Date()}]);
  }

  const changeName = (newValue, idx) => {
    setItems(
      items.map((item) => {
        if (item.id === idx) {
          return {
            ...item,
            name: newValue
          };
        }
        return item;
      })
    );
  }

  const changeAmount = (newValue, idx) => {
    setItems(
      items.map((item) => {
        if (item.id === idx) {
          return {
            ...item,
            amount: newValue
          };
        }
        return item;
      })
    );
  }


  return (
    <Container className="d-flex align-items-center flex-column">
      <h1>Shopping List</h1>
      <InputGroup className="d-flex align-items-center flex-column">
        {items.map((element) => (
          <ShoppingListEntry
            name={element.name}
            deleteMethod={deleteEntryByID}
            amount={element.amount}
            changeName={changeName}
            changeAmount={changeAmount}
            id={element.id}
            date={element.date.toLocaleTimeString() +" "+ element.date.toLocaleDateString()}
          />
        ))}
      </InputGroup>
      <Button onClick={addHandler}><Plus /></Button>
    </Container>
  );
}

function ShoppingListEntry(props) {
  return (
    <>
      <Form.Row className="mb-2 col-xs-12 col-lg-12">
        <FormControl
          // className="w-50 min-vw-150 p-1 mr-2"
          className="col-xs-6 col-lg-6"
          style={{ minWidth: "100px" }}
          placeholder="Bitte gebe einen Eintrag ein"
          onChange={(e) => props.changeName(e.target.value, props.id)}
          value={props.name}
        ></FormControl>
        {/* </Col> */}
        {/* <Col md="1"> */}
        <FormControl
          // className="w-25 mw-10 p-1 mr-2"
          className="col-xs-6 col-lg-2"
          placeholder="Bitte gebe die Menge ein"
          onChange={(e) => props.changeAmount(e.target.value, props.id)}
          value={props.amount}
        ></FormControl>
        {/* </Col> */}
        <InputGroup.Append className="col-xs-12 col-lg-2"> 
          <p>{props.date}</p>
        </InputGroup.Append>
        <InputGroup.Append className="col-xs-12 col-lg-2"> 
          <Button
            className="w-20"
            variant="danger"
            onClick={() => props.deleteMethod(props.id)}
          >
            Löschen
            </Button>
        </InputGroup.Append>
      </Form.Row>
    </>
  );
}


export default ShoppingList;
