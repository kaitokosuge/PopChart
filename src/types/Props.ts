import { UseQueryResult } from "@tanstack/react-query";

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
}

export interface PrefListAreaProps {
  prefData: UseQueryResult<any, Error>;
}
