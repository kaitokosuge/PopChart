import { expect, test } from "vitest";
import { getPrefectures } from "../getPrefectures";
import { resasApiResponcePrefectures } from "./resasApiResponcePrefectures ";

test("can perform API call", async () => {
  const res = await getPrefectures();
  if (res.status === "success") {
    expect(res.data.result.data).toEqual(resasApiResponcePrefectures);
  }
});
