import { TopTemplateProps } from "../../types/Props";
import ChartArea from "../organisms/ChartArea";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import PrefListArea from "../organisms/PrefListArea";

export default function TopTemplate({
  prefData,
  prefPopChartDatas,
  manageAllCheckBoxReset,
  isAllReset,
}: TopTemplateProps) {
  return (
    <>
      <Header />
      <main>
        <PrefListArea
          prefData={prefData}
          manageAllCheckBoxReset={manageAllCheckBoxReset}
          isAllReset={isAllReset}
        />
        <ChartArea prefPopChartDatas={prefPopChartDatas} />
      </main>
      <Footer />
    </>
  );
}
