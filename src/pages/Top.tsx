import { useQuery } from "@tanstack/react-query";
import { getPopByPrefecture } from "../functions/getPopByPrefecture";
import Title from "../components/atoms/Title";

export default function Top() {
  const prefCode = 10;
  const query = useQuery({
    queryKey: ["population"],
    queryFn: () => getPopByPrefecture(prefCode),
  });
  console.log(query.data);
  return (
    <div>
      <Title title="都道府県" />
    </div>
  );
}
