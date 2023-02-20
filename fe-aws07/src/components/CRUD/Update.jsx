import { useState, useRef } from 'react';
import goToBackEnd from '../../helpers/goToBackEnd.jsx';

export default function Update() {
  const [itemId, setItemId] = useState("");
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState("");
  const [newName, setNewName] = useState("");
  const inputIdRef = useRef("");
  const inputNameRef = useRef("");

  const goToBE = async ({ method, param, data }) => {
    setMessage("Processing...");
    
    const result = await goToBackEnd({ method, param, data });
    
    if (result.error) {
      setMessage(result.message);
    } else {
      if (param) {
        const incomingData = result.message[0];

        if (!incomingData) {
          setMessage("No such item has been found.");
          return;
        }
        
        setMessage("");
        setFormData(incomingData);
        setNewName(incomingData.item);
        setTimeout(() =>
          inputNameRef.current.focus()
        , 1);
      } else {
        setMessage(`Item '${newName}' has been updated succesfully! \\o/`);
        setFormData(result.message);
      }
    }
  };


  const getItem = () => {
    setFormData("");
    if (itemId === "") {
      setMessage("Id, please!");
      inputIdRef.current.focus();
      return;
    }

    goToBE({ method: "GET", param: itemId });
  };


  const goToUpdate = () => {
    if (newName === formData.item) {
      setMessage("No changes at all.");
      return;
    }

    goToBE({ method: "PUT", data: {id: itemId, newName } });
  };


  const captureEnter = event => {
    console.log("event.target.name ", event.target.name)
    if (event.key === "Enter") {
      event.target.name === "id" && getItem();
      event.target.name === "name" && goToUpdate();
    }
  };

  return (
    <div className="crud">
      <h1 className="action-title">Updating an Item</h1>
      <label className="label-crud">Item Id:</label>
      <input type="text" value={itemId} autoFocus onKeyDown={captureEnter} name="id" ref={inputIdRef}
        onChange={event => setItemId(event.target.value)} className="input-crud" />
      <button onClick={() => getItem()} className="button-crud">Get Item</button>

      { formData &&
        <div className="extra-container-crud">
          <label className="label-crud">New Name: </label>
          <input type="text" value={newName} ref={inputNameRef} onKeyDown={captureEnter} name="name"
            onChange={event => setNewName(event.target.value)} className="input-crud"/>

            <button onClick={goToUpdate} className="button-crud">Update Item</button>
        </div>
      }

      <h3 className="message-crud"> { message }</h3>
    </div>
  )
}
