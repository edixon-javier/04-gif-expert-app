/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");
describe("evidence in the archive GifItem", () => {
  const category = "Dead note";
  test("should not initially show loading", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Loading..."));
    expect(screen.getByText(category));
  });

  test("should show items when show the images with useEfect", () => {
    const gifs = [
      {
        id: "15",
        url: "https://localhost/Vegeta.jpg",
        title: "Vegeta",
      },
      {
        id: "16",
        url: "https://localhost/Goku.jpg",
        title: "Goku",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
