export const getPopByPrefecture = async (prefCode: number) => {
  const res = await fetch(
    `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefCode}`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": import.meta.env.VITE_RESAS_API_KEY,
      },
    }
  );
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText);
  }
  return res.json();
};
