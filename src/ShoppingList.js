import React from "react";
import { Button, Col, Form, FormControl, InputGroup } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import useLocalStorage from './useLocalStorage';

function ShoppingList() {
  const [items, setItems] = useLocalStorage("shoppinglist", [{ id: 0, name: "", amount: 1, isDone: false }]);

  function deleteEntryByID(id) {
    setItems(items.filter(entry => entry.id !== id));
  }

  const addHandler = () => {
    setItems([...items, { id: items.length !== 0 ? Math.max(...items.map((l) => l.id)) + 1 : 0, name: "", amount: 1, isDone: false }]);
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
    <>
      <h1>Shopping List</h1>
      <table>
        {items.map((element) => (
          <ShoppingListEntry
            name={element.name}
            deleteMethod={deleteEntryByID}
            amount={element.amount}
            changeName={changeName}
            changeAmount={changeAmount}
            id={element.id}
          />
        ))}
        <InputGroup>
          <Button onClick={addHandler}><Plus /></Button>
        </InputGroup>
      </table>
    </>
  );
}

function ShoppingListEntry(props) {
  return (
    <tr>
      <InputGroup>
        <Form.Row>
          <Col md="auto">
            <FormControl
              placeholder="Bitte gebe einen Eintrag ein"
              onChange={(e) => props.changeName(e.target.value, props.id)}
              value={props.name}
            ></FormControl>
          </Col>
          <Col md="1">
            <FormControl
              placeholder="Bitte gebe die Menge ein"
              onChange={(e) => props.changeAmount(e.target.value, props.id)}
              value={props.amount}
            ></FormControl>
          </Col>
          <InputGroup.Append>
            <Button
              variant="danger"
              onClick={() => props.deleteMethod(props.id)}
            >
              Löschen
            </Button>
          </InputGroup.Append>
        </Form.Row>
      </InputGroup>
    </tr>
  );
}


export default ShoppingList;
