/* eslint-disable no-undef */
export const fetchImages = async (searchTerm) => {
  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&q=` +
        searchTerm +
        `&image_type=photo&pretty=true&nature=true`,
    );
    const responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.error(error);
  }
};
