import { MainCheckBoxProps } from "../../types/Props";
import atomes from "../../assets/css/atoms.module.css";
import { useQuery } from "@tanstack/react-query";
import { getPopByPrefecture } from "../../functions/getPopByPrefecture";
import { useChangeCheckBox } from "../../hooks/useChangeCheckBox";
import { memo, useEffect, useState } from "react";

function MainCheckBox({ id, prefName, isAllReset }: MainCheckBoxProps) {
  const { handleChangeMainCheckBox } = useChangeCheckBox();
  const handleChangeCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
    handleChangeMainCheckBox(e, prefPopData);
  };

  const [isChecked, setIsChecked] = useState(false);
  const prefPopData = useQuery({
    queryKey: [`${Number(id)}`],
    queryFn: () => getPopByPrefecture(Number(id)),
    staleTime: Infinity,
  });

  useEffect(() => {
    if (isAllReset) {
      console.log("good");
      setIsChecked(false);
    }
  }, [isAllReset]);
  return (
    <input
      type="checkbox"
      id={prefName}
      className={atomes.main_checkbox}
      onChange={handleChangeCheckBox}
      checked={isChecked}
    />
  );
}
export default memo(MainCheckBox);
