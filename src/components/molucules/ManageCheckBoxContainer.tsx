import { ManageCheckBoxContainerPropsProps } from "../../types/Props";
import MainButton from "../atoms/MainButton";

export default function ManageCheckBoxContainer({
  manageAllCheckBox,
}: ManageCheckBoxContainerPropsProps) {
  return (
    <div>
      <MainButton
        buttonValue="全てのチェックを外す"
        manageAllCheckBox={manageAllCheckBox}
      />
    </div>
  );
}
