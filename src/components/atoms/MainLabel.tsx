import { MainLabelProps } from "../../types/Props";
import atomes from "../../assets/css/atoms.module.css";

export default function MainLabel({ id, prefName }: MainLabelProps) {
  return (
    <label htmlFor={id} className={atomes.main_label}>
      {prefName}
    </label>
  );
}
