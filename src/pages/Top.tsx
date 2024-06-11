import { useQuery } from "@tanstack/react-query";
import { getPopByPrefecture } from "../functions/getPopByPrefecture";
import TopTemplate from "../components/templates/TopTemplate";

export default function Top() {
  const prefCode = 10;
  const query = useQuery({
    queryKey: [`${prefCode}`],
    queryFn: () => getPopByPrefecture(prefCode),
  });
  console.log(query.data);
  return (
    <>
      <TopTemplate />
    </>
  );
}
