import { UseQueryResult } from "@tanstack/react-query";
import { ChartData } from "./Variables";

export interface TitleProps {
  title: string;
}

export interface MainCheckBoxProps {
  id: string;
  prefName: string;
  isAllReset: boolean;
}

export interface MainLabelProps {
  prefName: string;
}

export interface MainButtonPropsProps {
  buttonValue: string;
  manageAllCheckBoxReset: () => void;
}

export interface PrefCheckBoxProps {
  id: string;
  prefName: string;
  isAllReset: boolean;
}

export interface ManageCheckBoxContainerPropsProps {
  manageAllCheckBoxReset: () => void;
}

export interface TopTemplateProps {
  prefData: UseQueryResult<any, Error>;
  prefPopChartDatas: ChartData[];
  manageAllCheckBoxReset: () => void;
  isAllReset: boolean;
}

export interface PrefListAreaProps {
  prefData: UseQueryResult<any, Error>;
  manageAllCheckBoxReset: () => void;
  isAllReset: boolean;
}

export interface ChartDataProps {
  prefPopChartDatas: ChartData[];
}
