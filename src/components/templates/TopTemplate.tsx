import { TopTemplateProps } from "../../types/Props";
import ChartArea from "../organisms/ChartArea";
import PrefListArea from "../organisms/PrefListArea";

export default function TopTemplate({
  prefData,
  prefPopChartDatas,
}: TopTemplateProps) {
  return (
    <main>
      <PrefListArea prefData={prefData} />
      <ChartArea prefPopChartDatas={prefPopChartDatas} />
    </main>
  );
}
