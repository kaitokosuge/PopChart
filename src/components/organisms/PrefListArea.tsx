import Title from "../atoms/Title";
import PrefCheckBox from "../molucules/PrefCheckBox";
import organisms from "../../assets/css/organisms.module.css";
import { PrefListAreaProps } from "../../types/Props";
import { PrefData } from "../../types/Variables";
import ManageCheckBoxContainer from "../molucules/ManageCheckBoxContainer";

export default function PrefListArea({
  prefData,
  manageAllCheckBoxReset,
  isAllReset,
}: PrefListAreaProps) {
  if (prefData.isPending) {
    return (
      <section className={organisms.section}>
        <Title title="都道府県" />
        <p className={organisms.load_text}>都道府県データの取得中です</p>
      </section>
    );
  }
  if (prefData.error) {
    return (
      <section className={organisms.section}>
        <Title title="都道府県" />
        <p className={organisms.error_text}>
          都道府県データの取得に失敗しました{prefData.error.message}
        </p>
      </section>
    );
  }
  return (
    <section className={organisms.section}>
      <div className={organisms.section_titleArea}>
        <Title title="都道府県" />
        <ManageCheckBoxContainer
          manageAllCheckBoxReset={manageAllCheckBoxReset}
        />
      </div>

      <div className={organisms.pref_listarea}>
        {prefData.data.result.map((pref: PrefData) => (
          <PrefCheckBox
            id={String(pref.prefCode)}
            prefName={pref.prefName}
            key={pref.prefName}
            isAllReset={isAllReset}
          />
        ))}
      </div>
    </section>
  );
}
