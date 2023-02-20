import { useState, useRef, useEffect } from 'react';
import BuildTable from '../../helpers/BuildTable.jsx';
import goToBackEnd from '../../helpers/goToBackEnd.jsx';

export default function GetOne({ itemIdParam }) {
  const [itemId, setItemId] = useState("");
  const [data, setData] = useState("");
  const [message, setMessage] = useState("");
  const inputRef = useRef("");

  const goToBE = async () => {
    setData("");
    if (isNaN(itemId) && !itemIdParam) {
      setMessage("Number, please!");
      inputRef.current.focus();
      return;
    }

    setMessage("Processing...");
    
    if (!itemId && !itemIdParam)
      return inputRef.current.focus();

    const result = await goToBackEnd({method: "GET", param: itemId || itemIdParam});
    if (result.error)
      setMessage(result.error);
    else {
      if (result.message.length < 1)
        setMessage(`No item id '${itemId}' has been found!`);
      else {
        setData(result.message);
        setMessage("");
      }
    }
  };

  useEffect(() => {
    itemIdParam && goToBE();
  }, []);

  const captureEnter = event => {
    if (event.key === "Enter")
      goToBE();
  };

  return (
    <>
      <h1>Getting Item</h1>
      <label>Item Id:</label>
      <input type="text" value={itemId} ref={inputRef} autoFocus onKeyDown={captureEnter}
        onChange={event => setItemId(event.target.value)} />
      <button onClick={() => goToBE()}>Get Item</button>

      {data ? <BuildTable data = { data } /> : <h3> { message }</h3>}
    </>
  )
}
