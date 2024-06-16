import { UseQueryResult } from "@tanstack/react-query";
import { ChartData } from "./Variables";

export interface TitleProps {
  title: string;
}

export interface MainCheckBoxProps {
  id: string;
  prefName: string;
}

export interface MainLabelProps {
  prefName: string;
}

export interface MainButtonPropsProps {
  buttonValue: string;
  manageAllCheckBox: () => void;
}

export interface PrefCheckBoxProps {
  id: string;
  prefName: string;
}

export interface ManageCheckBoxContainerPropsProps {
  manageAllCheckBox: () => void;
}

export interface TopTemplateProps {
  prefData: UseQueryResult<any, Error>;
  prefPopChartDatas: ChartData[];
  manageAllCheckBox: () => void;
}

export interface PrefListAreaProps {
  prefData: UseQueryResult<any, Error>;
  manageAllCheckBox: () => void;
}

export interface ChartDataProps {
  prefPopChartDatas: ChartData[];
}
