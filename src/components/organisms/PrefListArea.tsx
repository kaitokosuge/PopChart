import Title from "../atoms/Title";
import PrefCheckBox from "../molucules/PrefCheckBox";
import organisms from "../../assets/css/organisms.module.css";
import { PrefListAreaProps } from "../../types/Props";

export default function PrefListArea({ prefData }: PrefListAreaProps) {
  return (
    <section>
      <Title title="都道府県" />
      <div className={organisms.pref_listarea}>
        <PrefCheckBox id="1" prefName="test" />
      </div>
    </section>
  );
}
