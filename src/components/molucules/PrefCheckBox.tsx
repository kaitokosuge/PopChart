import MainCheckBox from "../atoms/MainCheckBox";
import MainLabel from "../atoms/MainLabel";

import molucules from "../../assets/css/molucules.module.css";
import { PrefCheckBoxProps } from "../../types/Props";

export default function PrefCheckBox({ id, prefName }: PrefCheckBoxProps) {
  return (
    <div className={molucules.pref_checkbox}>
      <MainCheckBox id={id} />
      <MainLabel id={id} prefName={prefName} />
    </div>
  );
}
