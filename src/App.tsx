import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function App() {
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
    </>
  );
}

export default App;
