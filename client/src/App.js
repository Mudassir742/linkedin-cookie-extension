import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [emplyeCount, setEmployeCount] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.post("http://localhost:5000/get-data", {
          liAt: "AQEDAT9XPdkFy5DxAAABhJZsuEIAAAGEunk8Qk0AS_9D3llQ-HI01sZVN7wcrZBuvLs0ZLj7XraZxPLDYRJl9_vP1UYbV1I6QHVK-LnFpzxHeoMYu4fqY39f-pgtFjpZ-Mo-dvnlP2jD1Z8tOnqhYj01",
          token: "ajax:7205970595350190655",
          ssid: "ajax:7205970595350190655",
        });
        console.log(response);
        setEmployeCount(response.data?.emplyeCount)
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return <>{emplyeCount && <h1>{emplyeCount}</h1>}</>;
}

export default App;
