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
      setIsChecked(false);
    }
  }, [isAllReset]);
  if (prefPopData.error) {
    return <p>都道府県人口データの取得に失敗しました</p>;
  }
  return (
    <>
      {prefPopData.data !== undefined ? (
        <input
          type="checkbox"
          id={prefName}
          className={atomes.main_checkbox}
          onChange={handleChangeCheckBox}
          checked={isChecked}
        />
      ) : (
        <input
          type="checkbox"
          id={prefName}
          className={atomes.main_checkbox}
          onChange={handleChangeCheckBox}
          checked={isChecked}
          disabled
        />
      )}
    </>
  );
}
export default memo(MainCheckBox);
