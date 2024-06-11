export const getPopByPrefecture = async () => {
  const res = await fetch("https://opendata.resas-portal.go.jp", {
    headers: {
      "X-API-KEY": import.meta.env.VITE_RESAS_API_KEY,
    },
  });
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText);
  }
  return res.json();
};
