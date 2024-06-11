import Title from "../atoms/Title";
import PrefCheckBox from "../molucules/PrefCheckBox";
import organisms from "../../assets/css/organisms.module.css";
import { PrefListAreaProps } from "../../types/Props";
import { PrefData } from "../../types/Variables";

export default function PrefListArea({ prefData }: PrefListAreaProps) {
  if (prefData.error)
    return (
      <section>
        <Title title="都道府県" />
        都道府県データの取得に失敗しました{prefData.error.message}
      </section>
    );
  return (
    <section>
      <Title title="都道府県" />
      {prefData.isPending && (
        <>
          <p>都道府県データを読み込んでいます...</p>
        </>
      )}
      <div className={organisms.pref_listarea}>
        {prefData.data.result.map((pref: PrefData) => (
          <>
            <PrefCheckBox id={pref.prefCode} prefName={pref.prefName} />
          </>
        ))}
      </div>
    </section>
  );
}
