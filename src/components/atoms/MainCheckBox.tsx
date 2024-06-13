import { MainCheckBoxProps } from "../../types/Props";
import atomes from "../../assets/css/atoms.module.css";
import { useQuery } from "@tanstack/react-query";
import { getPopByPrefecture } from "../../functions/getPopByPrefecture";
import { useChangeCheckBox } from "../../hooks/useChangeCheckBox";

export default function MainCheckBox({ id }: MainCheckBoxProps) {
  const { handleChangeMainCheckBox } = useChangeCheckBox();
  const prefPopData = useQuery({
    queryKey: [`${Number(id)}`],
    queryFn: () => getPopByPrefecture(Number(id)),
  });
  console.log("prefPopData", prefPopData);
  return (
    <input
      type="checkbox"
      id={id}
      className={atomes.main_checkbox}
      onChange={(e) => handleChangeMainCheckBox(e, prefPopData)}
    />
  );
}
