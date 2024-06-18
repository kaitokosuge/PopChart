import Title from "../atoms/Title";
import PrefCheckBox from "../molucules/PrefCheckBox";
import organisms from "../../assets/css/organisms.module.css";
import { PrefListAreaProps } from "../../types/Props";
import { PrefData } from "../../types/Variables";
import ManageCheckBoxContainer from "../molucules/ManageCheckBoxContainer";
import atomes from "../../assets/css/atoms.module.css";
import { useState } from "react";

export default function PrefListArea({
  prefData,
  manageAllCheckBoxReset,
  isAllReset,
}: PrefListAreaProps) {
  console.log(prefData);
  const [isReduce, setIsReduce] = useState(false);
  const handleClickReduceCheckBox = () => {
    setIsReduce(!isReduce);
  };
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
        <div className={organisms.section_titleArea}>
          <ManageCheckBoxContainer
            manageAllCheckBoxReset={manageAllCheckBoxReset}
          />
          <button
            className={atomes.main_button_pc_hidden}
            onClick={handleClickReduceCheckBox}
          >
            {isReduce ? <>表示件数を戻す</> : <>表示件数を減らす</>}
          </button>
        </div>
      </div>
      <div className={isReduce ? atomes.shadowArea : ""}></div>
      <div
        className={
          isReduce ? organisms.pref_reduced_listarea : organisms.pref_listarea
        }
      >
        {prefData.data.message !== "Forbidden." ? (
          prefData.data.result.map((pref: PrefData) => (
            <PrefCheckBox
              id={String(pref.prefCode)}
              prefName={pref.prefName}
              key={pref.prefName}
              isAllReset={isAllReset}
            />
          ))
        ) : (
          <p>都道府県データの取得に失敗しました</p>
        )}
      </div>
    </section>
  );
}
