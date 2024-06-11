import { MainCheckBoxProps } from "../../types/Props";
import atomes from "../../assets/css/atoms.module.css";

export default function MainCheckBox({ id }: MainCheckBoxProps) {
  return <input type="checkbox" id={id} className={atomes.m_checkbox} />;
}
