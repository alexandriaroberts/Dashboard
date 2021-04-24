import "tailwindcss/tailwind.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Container from "./components/Container";

import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  // Fetch Data
  useEffect(() => {
    const getData = async () => {
      const dataServer = await fetchData();
      setData(dataServer);
    };
    getData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://api.apy.vision/portfolio/0x006CC1b89E9B68E08eEC14a514d17b47b363ACce"
    );
    const data = await res.json();
    return data;
  };

  useEffect(() => fetchData(), []);

  return (
    <div>
      <div className="flex w-screen h-screen">
        <Sidebar />
        <div className="w-screen  mx-10 ">
          <Header data={data} />
          <Container data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
