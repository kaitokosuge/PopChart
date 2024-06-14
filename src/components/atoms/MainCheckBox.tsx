import { MainCheckBoxProps } from "../../types/Props";
import atomes from "../../assets/css/atoms.module.css";
import { useQuery } from "@tanstack/react-query";
import { getPopByPrefecture } from "../../functions/getPopByPrefecture";
import { useChangeCheckBox } from "../../hooks/useChangeCheckBox";
import { memo } from "react";

function MainCheckBox({ id, prefName }: MainCheckBoxProps) {
  const { handleChangeMainCheckBox } = useChangeCheckBox();
  const prefPopData = useQuery({
    queryKey: [`${Number(id)}`],
    queryFn: () => getPopByPrefecture(Number(id)),
    staleTime: Infinity,
  });

  return (
    <input
      type="checkbox"
      id={prefName}
      className={atomes.main_checkbox}
      onChange={(e) => handleChangeMainCheckBox(e, prefPopData)}
    />
  );
}
export default memo(MainCheckBox);
