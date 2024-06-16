import { TopTemplateProps } from "../../types/Props";
import ChartArea from "../organisms/ChartArea";
import Header from "../organisms/Header";
import PrefListArea from "../organisms/PrefListArea";

export default function TopTemplate({
  prefData,
  prefPopChartDatas,
  manageAllCheckBoxReset,
}: TopTemplateProps) {
  return (
    <>
      <Header />
      <main>
        <PrefListArea
          prefData={prefData}
          manageAllCheckBoxReset={manageAllCheckBoxReset}
        />
        <ChartArea prefPopChartDatas={prefPopChartDatas} />
      </main>
    </>
  );
}
