import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TestFont from "./assets/css/test.module.css";

import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function App() {
  const [count, setCount] = useState(0);
  const options = {
    title: {
      text: "都道府県 人口データ",
    },
    series: [
      {
        data: [10000, 15000, 13000],
      },
    ],
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointRange: 10,
        pointStart: 1970,
      },
    },
  };
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className={TestFont.test}>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
