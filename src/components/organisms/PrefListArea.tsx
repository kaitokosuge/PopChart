import Title from "../atoms/Title";
import PrefCheckBox from "../molucules/PrefCheckBox";
import organisms from "../../assets/css/organisms.module.css";

export default function PrefListArea() {
  return (
    <div>
      <Title title="都道府県" />
      <div className={organisms.pref_listarea}>
        <PrefCheckBox id="1" prefName="test" />
      </div>
    </div>
  );
}
