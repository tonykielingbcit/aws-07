import "../../styles/crud-styles.scss";
import { useState, useRef, useEffect } from 'react';
import BuildTable from '../../helpers/BuildTable.jsx';
import goToBackEnd from '../../helpers/goToBackEnd.jsx';

export default function GetOne({ itemIdParam }) {
  const [itemId, setItemId] = useState("");
  const [data, setData] = useState("");
  const [message, setMessage] = useState("");
  const inputRef = useRef("");

  const goToBE = async () => {
    window.history.replaceState(null, "", `/getone/${(itemId || itemIdParam)}`);

    if (itemId === "" && !itemIdParam) {
      setMessage("Number, please!");
      inputRef.current.focus();
      window.history.replaceState(null, "", `/getone/`);
      return;
    }
    
    setData("");

    if ((isNaN(itemId) || !itemId) && !Number(itemIdParam)) {
      setMessage("Number, please!");
      setItemId(itemId || itemIdParam);
      inputRef.current.focus();
      return;
    }

    setMessage("Processing...");
    
    const result = await goToBackEnd({method: "GET", param: itemId || itemIdParam});

    if (result.error)
      setMessage(result.error);
    else {
      setItemId(Number(itemId || itemIdParam));
      if (result.message.length < 1) {
        setMessage(`No item id '${itemId || itemIdParam}' has been found!`);
      } else {
        setData(result.message);
        setMessage("");
      }
    }
  };

  useEffect(() => {
    if (itemIdParam) {
      setItemId(Number(itemIdParam));
      goToBE();
    }
  }, []);

  const captureEnter = event => {
    if (event.key === "Enter")
      goToBE();
  };

  return (
    <div className="crud">
      <h1 className="action-title">Getting an Item</h1>
      <label htmlFor="itemId" className="label-crud" >Item Id:</label>
      <input type="text" value={itemId} ref={inputRef} autoFocus onKeyDown={captureEnter} id="itemId"
        onChange={event => setItemId(event.target.value)} className="input-crud" />
      <button onClick={() => goToBE()} className="button-crud">Get Item</button>

      {data ? <BuildTable data = { data } /> : <h3 className="message-crud"> { message }</h3>}
    </div>
  )
}
