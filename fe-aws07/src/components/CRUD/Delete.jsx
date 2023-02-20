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

      inputRef.current.focus();
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
    <div className="crud">
      <h1 className="action-title">Deleting an Item</h1>
      <label className="label-crud">Item Id:</label>
      <input type="text" value={itemId} autoFocus onKeyDown={captureEnter} name="id" ref={inputRef}
        onChange={event => setItemId(event.target.value)} className="input-crud" />
      <button onClick={() => getItem()} className="button-crud">Get Item</button>

      { formData &&
        <div className="extra-container-crud">
          <span className="label-crud">Item id: { formData.id }</span>
          <span className="label-crud">Item name: { formData.item }</span>

          <h3>Do you confirm deletion?</h3>
          <div className="cont-bt-crud">
            <button className="button-crud bt-yes" onClick={goToDelete}>Yes</button>
            <button className="button-crud bt-no" onClick={noDeletion}>No</button>
          </div>
        </div>
      }

      <h3 className="message-crud"> { message }</h3>
    </div>
  )
}
