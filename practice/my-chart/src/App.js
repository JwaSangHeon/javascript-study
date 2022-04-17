import Chart from "./Components/Chart";
import { useState } from "react";
// import { UserData } from "./Components/Data";
import UserData from "./Components/Sample.json";
function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.word),
    datasets: [
      {
        label: "빈도 수",
        data: UserData.map((data) => data.frequency),
        backgroundColor: "lightgreen",
        indexAxis: "y",
      },
    ],
  });
  return (
    <div>
      <div style={{ width: 700 }}>
        <Chart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
