import { memo } from "react";
import atomes from "../../assets/css/atoms.module.css";
import { MainButtonPropsProps } from "../../types/Props";

function MainButton({
  buttonValue,
  manageAllCheckBoxReset,
}: MainButtonPropsProps) {
  return (
    <button className={atomes.main_button} onClick={manageAllCheckBoxReset}>
      {buttonValue}
    </button>
  );
}
export default memo(MainButton);
