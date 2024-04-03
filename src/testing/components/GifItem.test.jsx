/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";
describe("evidence in the archive GifItem", () => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=brkkTG9o4yTFN77IMDY9wFQuePAhp08Z&q=goku&limit=16`;
  const title = "goku";

  test("Must match the snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Must display the image and url indicated. ", () => {
    render(<GifItem title={title} url={url} />);
    //! screen es importante para saber como se ve cuando se render, tener en cuenta la importacion
    // screen.debug();
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
    //? estas pruebas son iguales pero desdestrcuturando el img para sacas las propiedades.
    expect(screen.getByRole("img").src).toBe(url);
    expect(screen.getByRole("img").alt).toBe(title);
  });
});
