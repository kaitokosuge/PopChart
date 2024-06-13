import { MainLabelProps } from "../../types/Props";
import atomes from "../../assets/css/atoms.module.css";
import { memo } from "react";

function MainLabel({ id, prefName }: MainLabelProps) {
  return (
    <label htmlFor={id} className={atomes.main_label}>
      {prefName}
    </label>
  );
}
export default memo(MainLabel);
