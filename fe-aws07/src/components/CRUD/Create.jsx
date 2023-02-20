import { useState, useRef } from 'react';
import goToBackEnd from '../../helpers/goToBackEnd.jsx';

export default function Create() {
  const [itemName, setItemName] = useState("");
  const [message, setMessage] = useState("");
  const inputRef = useRef("");

  const goToBE = async () => {
    if (itemName === "") {
      setMessage("Name, please!");
      inputRef.current.focus();
      return;
    }

    setMessage("Processing...");
    
    const result = await goToBackEnd({ method: "POST", data: itemName });
    
    if (result.error)
      setMessage(result.message);
    else {
      setMessage(`Item '${itemName}' has been added succesfully! \\o/`);
      setItemName("");
      inputRef.current.focus();
    }
  };

  const captureEnter = event => {
    if (event.key === "Enter")
      goToBE();
  };

  return (
    <div className="crud">
      <h1 className="action-title">Adding a New Item</h1>
      <label className="label-crud">Item name:</label>
      <input type="text" value={itemName} ref={inputRef} autoFocus onKeyDown={captureEnter}
        onChange={event => setItemName(event.target.value)} className="input-crud" />
      <button onClick={() => goToBE()} className="button-crud">Create Item</button>

      <h3 className="message-crud"> { message }</h3>
    </div>
  )
}
