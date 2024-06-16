import atomes from "../../assets/css/atoms.module.css";
import { MainButtonPropsProps } from "../../types/Props";

export default function MainButton({
  buttonValue,
  manageAllCheckBoxReset,
}: MainButtonPropsProps) {
  return (
    <button className={atomes.main_button} onClick={manageAllCheckBoxReset}>
      {buttonValue}
    </button>
  );
}