import { expect, test } from "vitest";
import { getPrefectures } from "../getPrefectures";
import { resasApiResponcePrefectures } from "./resasApiResponcePrefectures ";
import { getPopByPrefecture } from "../getPopByPrefecture";

test("RESAS APIより、都道府県データが本アプリにおいて必要なデータ構造で返却されるかどうか", async () => {
  const res = await getPrefectures();
  expect(res.result).toEqual(resasApiResponcePrefectures);
});

test("APIキーが定義されていない場合エラーテキストを返すかどうか", async () => {
  const originalEnv = import.meta.env.VITE_RESAS_API_KEY;
  import.meta.env.VITE_RESAS_API_KEY = "";
  await expect(getPrefectures()).rejects.toThrow(
    "RESAS_API_KEY is not defined"
  );
  import.meta.env.VITE_RESAS_API_KEY = originalEnv;
});

test("都道府県ごとのデータ取得時、RESAS APIから4つのカテゴリの人口データが返却されるか", async () => {
  const res = await getPopByPrefecture(1);
  expect(res.result.data.length === 4).toBeTruthy();
});

test("都道府県ごとのデータ取得時、RESAS APIの4つのカテゴリが本アプリの想定するものかどうか", async () => {
  const res = await getPopByPrefecture(1);
  const expectNames = ["総人口", "年少人口", "生産年齢人口", "老年人口"];
  const resasCategoriesName = res.result.data.map(
    (item: { label: string; data: { year: number; value: number }[] }) =>
      item.label
  );
  expect(
    JSON.stringify(expectNames) === JSON.stringify(resasCategoriesName)
  ).toBeTruthy();
});
