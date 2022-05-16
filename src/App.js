import { useEffect, useRef, useState } from 'react';
import './App.css';

const fetchRandomImages = async (searchTerm) => {
  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&q=` +
        searchTerm +
        `&image_type=photo&pretty=true`,
    );
    const responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.error(error);
  }
};

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(null);
  const inputRef = useRef();

  useEffect(() => {
    if (!searchTerm) {
      setData(null);
      return;
    }
    fetchRandomImages(searchTerm).then((data) => {
      setData(data.hits);
    });
  }, [searchTerm]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(inputRef.current.value);
  };

  const handleOnReset = () => {
    setSearchTerm('');
    inputRef.current.value = '';
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <div className="input-group relative flex items-stretch w-full mb-4 rounded">
              <input
                ref={inputRef}
                focus
                placeholder="Type away any thing you want to search images about"
                defaultValue={searchTerm}
                className="relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <span
                className="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
                id="basic-addon2">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  className="w-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <button type="button" onClick={handleOnReset}>
          reset{' '}
        </button>{' '}
      </form>{' '}
      <section className="overflow-hidden text-gray-700 ">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            {' '}
            {data !== null ? (
              <>
                {data.length > 0 ? (
                  <>
                    {' '}
                    {data.map((image, index) => (
                      <div
                        className="flex flex-wrap lg:w-1/4 sm:w-1/1 md:w-1/2  overflow-hidden bg-no-repeat bg-cover max-w-xs"
                        key={index}>
                        <div className="w-full p-1 md:p-2  overflow-hidden bg-no-repeat bg-cover max-w-xs">
                          <img
                            alt="gallery"
                            loading="lazy"
                            className="block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-300 ease-in-out"
                            src={image.webformatURL}
                          />{' '}
                        </div>{' '}
                      </div>
                    ))}{' '}
                  </>
                ) : (
                  <p>No results for this term</p>
                )}
              </>
            ) : (
              <p> Search anything to show images </p>
            )}{' '}
          </div>{' '}
        </div>{' '}
      </section>{' '}
    </>
  );
}

export default App;
