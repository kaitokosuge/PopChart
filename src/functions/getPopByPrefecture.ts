export const getPopByPrefecture = async (prefCode: number) => {
  const apiKey = process.env.POP_RESAS_API_KEY;
  if (!apiKey) {
    throw new Error("RESAS_API_KEY is not defined");
  }
  const res = await fetch(
    `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefCode}`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": apiKey,
      },
    }
  );
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText);
  }
  return res.json();
};
