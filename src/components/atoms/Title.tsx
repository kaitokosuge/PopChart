import { TitleProps } from "../../types/Props";
import atomes from "../../assets/css/atoms.module.css";
import { memo } from "react";

function Title({ title }: TitleProps) {
  return <h2 className={atomes.title}>{title}</h2>;
}
export default memo(Title);
