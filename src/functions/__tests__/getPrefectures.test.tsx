import { expect, test } from "vitest";
import { getPrefectures } from "../getPrefectures";
import { resasApiResponcePrefectures } from "./resasApiResponcePrefectures ";

test("RESAS APIから都道府県データが本アプリにおいて必要なデータ構造で返却されるかどうか", async () => {
  const res = await getPrefectures();
  if (res.status === "success") {
    expect(res.data.result.data).toEqual(resasApiResponcePrefectures);
  }
});
