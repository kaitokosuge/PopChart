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
    xAxis: {
      title: {
        text: "年度",
      },
      accessibility: {
        rangeDescription: "Range: 1960 to 2045",
      },
      categories: [
        "1960",
        "1965",
        "1970",
        "1975",
        "1980",
        "1985",
        "1990",
        "1995",
        "2000",
        "2005",
        "2010",
        "2015",
        "2020",
        "2025",
        "2030",
        "2035",
        "2040",
        "2045",
      ],
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
      },
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },
  };
  return (
    <section>
      <Title title="グラフ" />
      <HighchartsReact highcharts={Highcharts} options={options} />
    </section>
  );
}
