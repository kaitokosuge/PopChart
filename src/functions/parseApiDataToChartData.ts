import { YearAndPopObj } from "../types/Variables";

export const parseApiDataToChartData = (
  apiData: YearAndPopObj[],
  prefName: string
) => {
  return {
    name: prefName,
    type: "line",
    data: apiData.map((item: YearAndPopObj) => item.value),
  };
};
