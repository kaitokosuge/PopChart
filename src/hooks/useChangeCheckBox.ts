import { UseQueryResult } from "@tanstack/react-query";
import { createContext, useContext } from "react";

interface ChartContextType {
  handleChangeMainCheckBox: (
    e: React.ChangeEvent<HTMLInputElement>,
    prefPopData: UseQueryResult<any, Error>,
  ) => JSX.Element | undefined;
}

export const changeCheckBoxContext = createContext<
  ChartContextType | undefined
>(undefined);

export const useChangeCheckBox = () => {
  const context = useContext(changeCheckBoxContext);
  if (!context) {
    throw new Error("useChart must be used within a ChartProvider");
  }
  return context;
};
