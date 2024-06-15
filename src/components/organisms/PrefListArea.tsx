import Title from "../atoms/Title";
import PrefCheckBox from "../molucules/PrefCheckBox";
import organisms from "../../assets/css/organisms.module.css";
import { PrefListAreaProps } from "../../types/Props";
import { PrefData } from "../../types/Variables";

export default function PrefListArea({ prefData }: PrefListAreaProps) {
  if (prefData.isPending) {
    return (
      <section className={organisms.section}>
        <Title title="都道府県" />
        都道府県データの取得中です
      </section>
    );
  }
  if (prefData.error) {
    return (
      <section className={organisms.section}>
        <Title title="都道府県" />
        都道府県データの取得に失敗しました{prefData.error.message}
      </section>
    );
  }
  return (
    <section className={organisms.section}>
      <Title title="都道府県" />
      <div className={organisms.pref_listarea}>
        {prefData.data.result.map((pref: PrefData) => (
          <PrefCheckBox
            id={String(pref.prefCode)}
            prefName={pref.prefName}
            key={pref.prefName}
          />
        ))}
      </div>
    </section>
  );
}
