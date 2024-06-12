import { TopTemplateProps } from "../../types/Props";
import ChartArea from "../organisms/ChartArea";
import PrefListArea from "../organisms/PrefListArea";

export default function TopTemplate({ prefData }: TopTemplateProps) {
  return (
    <main>
      <PrefListArea prefData={prefData} />
      <ChartArea />
    </main>
  );
}
