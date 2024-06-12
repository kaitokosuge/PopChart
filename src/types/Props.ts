import { UseQueryResult } from "@tanstack/react-query";
import { ChartData } from "./Variables";

export interface TitleProps {
  title: string;
}

export interface MainCheckBoxProps {
  id: string;
}

export interface MainLabelProps {
  id: string;
  prefName: string;
}

export interface PrefCheckBoxProps {
  id: string;
  prefName: string;
}

export interface TopTemplateProps {
  prefData: UseQueryResult<any, Error>;
  prefPopChartDatas: ChartData[];
}

export interface PrefListAreaProps {
  prefData: UseQueryResult<any, Error>;
}

export interface ChartDataProps {
  prefPopChartDatas: ChartData[];
}
