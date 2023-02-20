import "../../styles/container.scss";
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
    <div className="crud">
      <h1 className="action-title">Getting all Items</h1>
      {data ? <BuildTable data = { data } /> : <h3> { message }</h3>}
    </div>
  )
}
