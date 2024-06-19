import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { ChartDataProps } from "../../types/Props";
import { useState } from "react";
import { ChartData } from "../../types/Variables";
import organisms from "../../assets/css/organisms.module.css";
import { parseApiDataToYearData } from "../../functions/parseApiDataToYearData";

export default function ChartArea({ prefPopChartDatas }: ChartDataProps) {
  const [popStatus, setPopStatus] = useState(0);
  const handleClickChangePopDataStatus = (popStatusNum: number) => {
    setPopStatus(popStatusNum);
  };
  const seriesData = prefPopChartDatas.map((item: ChartData) => {
    return {
      name: item.name,
      type: item.type,
      data: item.data[popStatus].map(
        (item: { year: number; value: number }) => item.value
      ),
    };
  });
  const data = parseApiDataToYearData(prefPopChartDatas);

  const options = {
    chart: {
      height: 500,
      backgroundColor: "#fffafa",
    },

    title: {
      text: "",
    },
    series:
      seriesData.length === 0
        ? [{ name: "都道府県名", type: "line", data: [] }]
        : seriesData,
    xAxis: {
      title: {
        text: "年度",
        style: {
          fontSize: "1.2rem",
          fontWeight: "bold",
        },
      },
      accessibility: {
        rangeDescription: "Range: 1960 to 2045",
      },
      categories: data,
      labels: {
        style: {
          fontSize: "1.4rem",
          fontWeight: "bold",
        },
      },
    },
    yAxis: {
      title: {
        text: "人口数",
        style: {
          fontSize: "1.2rem",
          fontWeight: "bold",
        },
      },
      labels: {
        style: {
          fontSize: "1.2rem",
          fontWeight: "bold",
        },
      },
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
      style: {
        fontSize: "1.2rem",
        fontWeight: "bold",
      },
      itemStyle: {
        fontSize: "1.5rem",
        fontWeight: "bold",
      },
    },
    accessibility: {
      enabled: false,
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 768,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
              style: {
                fontSize: "1.1rem",
                fontWeight: "bold",
              },
              itemStyle: {
                fontSize: "1.1rem",
                fontWeight: "bold",
              },
            },
          },
        },
      ],
    },
  };
  return (
    <section className={organisms.section}>
      <div className={organisms.button_area}>
        <button
          className={
            popStatus === 0 ? organisms.button_clicked : organisms.button
          }
          onClick={() => handleClickChangePopDataStatus(0)}
        >
          総人口
        </button>
        <button
          className={
            popStatus === 1 ? organisms.button_clicked : organisms.button
          }
          onClick={() => handleClickChangePopDataStatus(1)}
        >
          年少人口
        </button>
        <button
          className={
            popStatus === 2 ? organisms.button_clicked : organisms.button
          }
          onClick={() => handleClickChangePopDataStatus(2)}
        >
          生産年齢人口
        </button>
        <button
          className={
            popStatus === 3 ? organisms.button_clicked : organisms.button
          }
          onClick={() => handleClickChangePopDataStatus(3)}
        >
          老年人口
        </button>
      </div>
      <div className={organisms.section_chart}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </section>
  );
}
