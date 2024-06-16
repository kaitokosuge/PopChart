import MainCheckBox from "../atoms/MainCheckBox";
import MainLabel from "../atoms/MainLabel";

import molucules from "../../assets/css/molucules.module.css";
import { PrefCheckBoxProps } from "../../types/Props";

import { memo } from "react";

function PrefCheckBox({ id, prefName, isAllReset }: PrefCheckBoxProps) {
  return (
    <div className={molucules.pref_checkbox}>
      <MainCheckBox id={id} prefName={prefName} isAllReset={isAllReset} />
      <MainLabel prefName={prefName} />
    </div>
  );
}
export default memo(PrefCheckBox);
