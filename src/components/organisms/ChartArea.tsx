import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Title from "../atoms/Title";

export default function ChartArea() {
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
    <section>
      <Title title="グラフ" />
      <HighchartsReact highcharts={Highcharts} options={options} />
    </section>
  );
}
