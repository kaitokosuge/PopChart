import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Title from "../atoms/Title";
import { ChartDataProps } from "../../types/Props";

export default function ChartArea({ prefPopChartDatas }: ChartDataProps) {
  const options = {
    title: {
      text: "都道府県 人口データ",
    },
    series: prefPopChartDatas,
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
