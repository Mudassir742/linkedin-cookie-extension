import { useState, useEffect } from "react";
//icons
import { AiFillCar as Car, AiFillAccountBook as Book } from "react-icons/ai";
import { BsBicycle as Cycle } from "react-icons/bs";
import { FaHelicopter as Choper } from "react-icons/fa";
import { GiAnglerFish as Fish } from "react-icons/gi";

import Widgets from "./components/Widgets";

import axios from "axios";

import "./App.css";

function App() {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://www.linkedin.com/voyager/api/entities/companies/2652230",
          {
            headers: {
              "csrf-token":"ajax:7205970595350190655",
              Cookie:
                "li_at=AQEDAT9XPdkFy5DxAAABhJZsuEIAAAGEunk8Qk0AS_9D3llQ-HI01sZVN7wcrZBuvLs0ZLj7XraZxPLDYRJl9_vP1UYbV1I6QHVK-LnFpzxHeoMYu4fqY39f-pgtFjpZ-Mo-dvnlP2jD1Z8tOnqhYj01;JSESSIONID=ajax:7205970595350190655;",
            },
          }
        );
        console.log(response)
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);
  // const [carWidget, setCarWidget] = useState([]);
  // const [fishWidget, setFishWidget] = useState([]);
  // const [cycleWidget, setCycleWidget] = useState([]);
  // const [bookWidget, setBookWidget] = useState([]);
  // const [choperWidget, setChoperWidget] = useState([]);

  return <></>;

  //return (
  // <div className="App">
  //   {/*Car Widget*/}
  //   <Widgets Icon={Car} widget={carWidget} setWidget={setCarWidget} />

  //   {/*Fish Widget*/}
  //   <Widgets Icon={Fish} widget={fishWidget} setWidget={setFishWidget} />

  //   {/*Cycle Widget*/}
  //   <Widgets Icon={Cycle} widget={cycleWidget} setWidget={setCycleWidget} />

  //   {/*Book Widget*/}
  //   <Widgets Icon={Book} widget={bookWidget} setWidget={setBookWidget} />

  //   {/*Choper Widget*/}
  //   <Widgets
  //     Icon={Choper}
  //     widget={choperWidget}
  //     setWidget={setChoperWidget}
  //   />
  // </div>
  // );
}

export default App;
