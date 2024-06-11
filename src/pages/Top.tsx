import { useQuery } from "@tanstack/react-query";
import { getPopByPrefecture } from "../functions/getPopByPrefecture";
import TopTemplate from "../components/templates/TopTemplate";
import { getPrefectures } from "../functions/getPrefectures";

export default function Top() {
  const prefCode = 10;
  const query = useQuery({
    queryKey: [`${prefCode}`],
    queryFn: () => getPopByPrefecture(prefCode),
  });
  console.log(query.data);

  const prefData = useQuery({
    queryKey: [`prefectures`],
    queryFn: () => getPrefectures(),
  });
  console.log("prefData", prefData);
  return (
    <>
      <TopTemplate />
    </>
  );
}
