export interface PrefData {
  prefCode: number;
  prefName: string;
}

export interface PopLabelData {
  label: string;
  data: { year: number; value: number }[];
}

export interface ChartData {
  name: string;
  type: string;
  data: { year: number; value: number }[][];
}
