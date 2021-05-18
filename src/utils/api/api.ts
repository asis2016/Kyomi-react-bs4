/**
 * An utility as a dedicated data-fetching function.
 * @param {string} url
 * @returns An Error or a JSON object.
 */

const getData = (url: string): any => {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw Error("There was a problem fetching data.");
    }
    return response.json();
  });
};

export default getData;
