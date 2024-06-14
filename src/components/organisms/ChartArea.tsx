import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Title from "../atoms/Title";
import { ChartDataProps } from "../../types/Props";
import { useState } from "react";

export default function ChartArea({ prefPopChartDatas }: ChartDataProps) {
  const [popStatus, setPopStatus] = useState(0);
  const handleClickChangePopDataStatus = (popStatusNum: number) => {
    setPopStatus(popStatusNum);
  };

  const seriesData = prefPopChartDatas.map((item: any) => {
    return {
      name: item.name,
      type: item.type,
      data: item.data[popStatus].map((item: any) => item.value),
    };
  });

  const options = {
    title: {
      text: "都道府県 人口データ",
    },
    series: seriesData,
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
      <div>
        <p onClick={() => handleClickChangePopDataStatus(0)}>総人口</p>
        <p onClick={() => handleClickChangePopDataStatus(1)}>年少人口</p>
        <p onClick={() => handleClickChangePopDataStatus(2)}>生産年齢人口</p>
        <p onClick={() => handleClickChangePopDataStatus(3)}>老年人口</p>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </section>
  );
}
