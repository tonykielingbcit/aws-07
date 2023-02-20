import { useEffect, useState } from 'react';
import goToBackEnd from '../../helpers/goToBackEnd.jsx';
import BuildTable from '../../helpers/BuildTable.jsx';

export default function GetAll() {
  const [data, setData] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    (async () => {
      setData("");
      setMessage("Processing...");
        
      const result = await goToBackEnd({ method: "GET" });
      if (result.error)
        setMessage(result.error);
      else {
          setData(result.message);
          setMessage("");
      }
    })();
  }, []);

  return (
    <>
      <h1>Getting All Items</h1>
      {data ? <BuildTable data = { data } /> : <h3> { message }</h3>}
    </>
  )
}
