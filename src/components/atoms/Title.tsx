import { TitleProps } from "../../types/Props";
import atomes from "../../assets/css/atoms.module.css";

export default function Title({ title }: TitleProps) {
  return <h2 className={atomes.title}>{title}</h2>;
}
