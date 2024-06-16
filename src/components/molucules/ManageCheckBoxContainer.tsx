import { ManageCheckBoxContainerPropsProps } from "../../types/Props";
import MainButton from "../atoms/MainButton";

export default function ManageCheckBoxContainer({
  manageAllCheckBoxReset,
}: ManageCheckBoxContainerPropsProps) {
  return (
    <div>
      <MainButton
        buttonValue="全てのチェックを外す"
        manageAllCheckBoxReset={manageAllCheckBoxReset}
      />
    </div>
  );
}
