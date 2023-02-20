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
    setFormData("");
    setMessage("Processing...");
    
    const result = await goToBackEnd({ method, param, data });
console.log("result::: ", result)
    if (result.error) {
      // setFormData("");
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
        setFormData(incomingData);
      }
    }
  };


  const getItem = () => {
    if (itemId === "") {
      setMessage("Id, please!");
      setFormData("");
      inputIdRef.current.focus();
      return;
    }

    goToBE({ method: "GET", param: itemId });
  };


  const goToUpdate = () => {
    console.log("gotoupdate:::: ", newName, itemId, formData)
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
    <>
      <h1>Updating A Item</h1>
      <label>Item Id:</label>
      <input type="text" value={itemId} autoFocus onKeyDown={captureEnter} name="id" ref={inputIdRef}
        onChange={event => setItemId(event.target.value)} />
      <button onClick={() => getItem()}>Get Item</button>

      { formData &&
        <div>
          <label>New Name: </label>
          <input type="text" value={newName} ref={inputNameRef} onKeyDown={captureEnter} name="name"
            onChange={event => setNewName(event.target.value)} />

          <div>
            <button onClick={goToUpdate}>Update Item</button>
            {/* <button onClick={noDeletion}>No</button> */}
          </div>
        </div>
      }

      <h3> { message }</h3>
    </>
  )
}
