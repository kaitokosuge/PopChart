export const parseApiDataToYearData = (prefPopChartDatas: any) => {
  if (prefPopChartDatas[0] !== undefined) {
    const data = prefPopChartDatas[0].data[0].map((item: any) =>
      String(item.year)
    );
    return data;
  }
};
