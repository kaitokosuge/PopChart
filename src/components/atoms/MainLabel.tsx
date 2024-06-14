import { MainLabelProps } from "../../types/Props";
import atomes from "../../assets/css/atoms.module.css";
import { memo } from "react";

function MainLabel({ prefName }: MainLabelProps) {
  return (
    <label htmlFor={prefName} className={atomes.main_label}>
      {prefName}
    </label>
  );
}
export default memo(MainLabel);
