/* eslint-disable no-undef */
import { GetGift } from "../../helpers/GetGifs";

describe("evidence in the archive getGif", () => {
  test("Must return an array of gifs", async () => {
    const category = "One Punch";
    const gifs = await GetGift(category);
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
