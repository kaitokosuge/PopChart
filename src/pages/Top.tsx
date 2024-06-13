import { useQuery } from "@tanstack/react-query";
import { getPopByPrefecture } from "../functions/getPopByPrefecture";
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

  //highchartにデータを流す処理から実装するため、一時的に1を指定
  const checkedPrefCode = "1";

  const prefPopData = useQuery({
    queryKey: [`${Number(checkedPrefCode)}`],
    queryFn: () => getPopByPrefecture(Number(checkedPrefCode)),
    enabled: checkedPrefCode !== null,
  });

  if (prefPopData.isPending) return <>loading</>;

  const handleChangeMainCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <input type="checkbox" id="東京" onChange={handleChangeMainCheckBox} />
    </>
  );
}
