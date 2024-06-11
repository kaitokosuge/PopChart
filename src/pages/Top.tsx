import { useQuery } from "@tanstack/react-query";
import { getPopByPrefecture } from "../functions/getPopByPrefecture";

export default function Top() {
  const prefCode = 10;
  const query = useQuery({
    queryKey: ["population"],
    queryFn: () => getPopByPrefecture(prefCode),
  });
  console.log(query.data);
  return <div></div>;
}
