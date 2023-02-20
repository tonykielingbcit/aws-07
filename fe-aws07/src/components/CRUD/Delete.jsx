import { useState, useRef } from 'react';
import goToBackEnd from '../../helpers/goToBackEnd.jsx';

export default function Delete() {
  const [itemId, setItemId] = useState("");
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState("");
  const inputRef = useRef("");

  const goToBE = async ({ method, param, data }) => {
    if (itemId === "") {
      setMessage("Id, please!");
      inputRef.current.focus();
      return;
    }

    setMessage("Processing...");
    
    const result = await goToBackEnd({ method, param, data });

    if (result.error) {
      setFormData("");
      setMessage(result.message);
    } else {
      if (param) {
        const incomingData = result.message[0];
        setMessage( incomingData ? "" : "No such item has been found.");
        setFormData(incomingData);
      } else {
        setMessage(`Item '${formData.item}' has been deleted succesfully! \\o/`);
        setItemId("");
        setFormData("");
      }
    }
  };

  const getItem = () => {
    goToBE({ method: "GET", param: itemId });
  };

  const goToDelete = () => {
    goToBE({ method: "DELETE", data: itemId});
  };

  const captureEnter = event => {
    if (event.key === "Enter")
      getItem();
  };

  const noDeletion = () => {
    setFormData("");
    setMessage("");
    setItemId("");
    inputRef.current.focus();
  };

  return (
    <>
      <h1>Deleting A Item</h1>
      <label>Item Id:</label>
      <input type="text" value={itemId} autoFocus onKeyDown={captureEnter} name="id" ref={inputRef}
        onChange={event => setItemId(event.target.value)} />
      <button onClick={() => getItem()}>Get Item</button>

      { formData &&
        <div>
          <span>Item id: { formData.id }</span>
          <span>Item name: { formData.item }</span>

          <h3>Do you confirm deletion?</h3>
          <div>
            <button onClick={goToDelete}>Yes</button>
            <button onClick={noDeletion}>No</button>
          </div>
        </div>
      }

      <h3> { message }</h3>
    </>
  )
}
