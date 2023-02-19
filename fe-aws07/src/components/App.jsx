import { useState } from 'react';
import "../App.css";

function App() {
  const [count, setCount] = useState(0)
  // const [data, setData] = useState(null);

  const goToBE = async () => {
    console.log("going to BE")
    try {
      const result = await fetch("/api/items", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({ email, password }),
      }).then((res) => res.json());
  
      if (result.error) {
        return;
      }
      console.log("result::", result.message);
    } catch(err) {
      console.log("###ERROR ON try/catch");
    }
  };

  return (
    // <div className="App">
    <main>
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    
      </div>
      <button onClick={goToBE}>
        Go to BE
      </button>
    </main>
    // </div>
  )
}

export default App
