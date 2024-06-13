import { UseQueryResult, useQuery } from "@tanstack/react-query";
import TopTemplate from "../components/templates/TopTemplate";
import { getPrefectures } from "../functions/getPrefectures";
import { parseApiDataToChartData } from "../functions/parseApiDataToChartData";
import { useState } from "react";
import { ChartData } from "../types/Variables";

export default function Top() {
  const prefData = useQuery({
    queryKey: [`prefectures`],
    queryFn: () => getPrefectures(),
  });

  const [prefPopChartDatas, setPrefChartData] = useState<ChartData[]>([]);

  const handleChangeMainCheckBox = (
    e: React.ChangeEvent<HTMLInputElement>,
    prefPopData: UseQueryResult<any, Error>
  ) => {
    if (prefPopData.isPending) {
      return <>loading</>;
    }

    const chartData = parseApiDataToChartData(
      prefPopData.data.result.data[0].data,
      e.target.id
    );
    setPrefChartData([...prefPopChartDatas, chartData]);
    console.log("prefPopChartDatas", prefPopChartDatas);
  };

  return (
    <>
      <TopTemplate prefData={prefData} prefPopChartDatas={prefPopChartDatas} />
      {/* ダミーチェックボックス（チェックボックス押下時の動作確認用、MainCheckBoxの代わり） */}
      {/* <input
        type="checkbox"
        id="東京"
        value="2"
        onChange={handleChangeMainCheckBox}
      /> */}
    </>
  );
}
// export const TestCheckbox = () => {
//   const checkedPrefCode: string = "1";
//   const prefPopData = useQuery({
//     queryKey: [`${Number(checkedPrefCode)}`],
//     queryFn: () => getPopByPrefecture(Number(checkedPrefCode)),
//     enabled: checkedPrefCode !== null,
//   });
//   return (
//     <>
//       <input
//         type="checkbox"
//         id="東京"
//         value="2"
//         onChange={handleChangeMainCheckBox}
//       />
//     </>
//   );
// };
