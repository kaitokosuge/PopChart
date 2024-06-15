import { TopTemplateProps } from "../../types/Props";
import ChartArea from "../organisms/ChartArea";
import Header from "../organisms/Header";
import PrefListArea from "../organisms/PrefListArea";

export default function TopTemplate({
  prefData,
  prefPopChartDatas,
}: TopTemplateProps) {
  return (
    <>
      <Header />
      <main>
        <PrefListArea prefData={prefData} />
        <ChartArea prefPopChartDatas={prefPopChartDatas} />
      </main>
    </>
  );
}
