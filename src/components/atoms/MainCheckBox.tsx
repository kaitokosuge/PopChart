import { MainCheckBoxProps } from "../../types/Props";
import atomes from "../../assets/css/atoms.module.css";
import { useQuery } from "@tanstack/react-query";
import { getPopByPrefecture } from "../../functions/getPopByPrefecture";

export default function MainCheckBox({ id }: MainCheckBoxProps) {
  const prefPopData = useQuery({
    queryKey: [`${Number(id)}`],
    queryFn: () => getPopByPrefecture(Number(id)),
  });
  console.log("prefPopData", prefPopData);
  return <input type="checkbox" id={id} className={atomes.main_checkbox} />;
}
