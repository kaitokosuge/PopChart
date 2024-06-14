import { PopLabelData } from "../types/Variables";

export const parseApiDataToChartData = (
  apiData: PopLabelData[],
  prefName: string
) => {
  return {
    name: prefName,
    type: "line",
    data: apiData.map((item: PopLabelData) => item.data),
  };
};
