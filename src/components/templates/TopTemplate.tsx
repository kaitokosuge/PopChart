import { TopTemplateProps } from "../../types/Props";
import PrefListArea from "../organisms/PrefListArea";

export default function TopTemplate({ prefData }: TopTemplateProps) {
  return (
    <main>
      <PrefListArea prefData={prefData} />
    </main>
  );
}
