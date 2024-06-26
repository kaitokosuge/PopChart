import { UseQueryResult, useQuery } from "@tanstack/react-query";
import TopTemplate from "../components/templates/TopTemplate";
import { getPrefectures } from "../functions/getPrefectures";
import { parseApiDataToChartData } from "../functions/parseApiDataToChartData";
import { useState } from "react";
import { ChartData } from "../types/Variables";
import { changeCheckBoxContext } from "../hooks/useChangeCheckBox";

export default function Top() {
  const prefData = useQuery({
    queryKey: [`prefectures`],
    queryFn: () => getPrefectures(),
    staleTime: Infinity,
  });

  const [prefPopChartDatas, setPrefChartData] = useState<ChartData[]>([]);

  const handleChangeMainCheckBox = (
    e: React.ChangeEvent<HTMLInputElement>,
    prefPopData: UseQueryResult<any, Error>,
  ) => {
    if (prefPopData.isPending) {
      return <>loading</>;
    }

    const chartData = parseApiDataToChartData(
      prefPopData.data.result.data,
      e.target.id,
    );

    if (prefPopChartDatas.some((item) => item.name === e.target.id)) {
      setPrefChartData(
        prefPopChartDatas.filter((item) => item.name !== e.target.id),
      );
    } else {
      setPrefChartData([...prefPopChartDatas, chartData]);
    }
  };
  const [isAllReset, setIsAllReset] = useState(false);
  const manageAllCheckBoxReset = () => {
    setPrefChartData([]);
    setIsAllReset(true);
    setTimeout(() => setIsAllReset(false), 100);
  };
  return (
    <>
      <changeCheckBoxContext.Provider
        value={{
          handleChangeMainCheckBox,
        }}
      >
        <TopTemplate
          prefData={prefData}
          prefPopChartDatas={prefPopChartDatas}
          manageAllCheckBoxReset={manageAllCheckBoxReset}
          isAllReset={isAllReset}
        />
      </changeCheckBoxContext.Provider>
    </>
  );
}
