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
      <header className="p-2 flex flex-row items-center justify-center border-b-2 border-indigo-100">
        <form onSubmit={handleOnSubmit}>
          <input
            ref={inputRef}
            focus
            className="w-full h-10 pl-4 pr-10 text-sm bg-white rounded-lg shadow-sm sm:w-80 border-2 border-indigo-500/50  hover:border-indigo-500/80 focus:border-indigo-500 focus:ring-0"
            id="search"
            placeholder="Type away any thing you want to search"
            defaultValue={searchTerm}
            aria-label="Search"
          />
          <button
            type="button"
            onClick={handleOnSubmit}
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 ml-2 rounded disabled:bg-indigo-500/20">
            Search
          </button>{' '}
          <button
            type="button"
            onClick={handleOnReset}
            disabled={searchTerm == ''}
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 ml-2 rounded disabled:bg-indigo-500/20">
            Clear Search
          </button>{' '}
        </form>{' '}
      </header>
      <section className="overflow-hidden text-gray-700 content-center justify-center">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2 justify-center">
            {' '}
            {data !== null ? (
              <>
                {data.length > 0 ? (
                  <>
                    {' '}
                    {data.map((image, index) => (
                      <div
                        className="flex flex-wrap lg:w-1/4 sm:w-1/1 md:w-1/2  overflow-hidden max-w-xs rounded-lg"
                        key={index}>
                        <div className="w-full p-1 md:p-2  overflow-hidden max-w-xs">
                          <img
                            alt="gallery"
                            loading="lazy"
                            className="block object-cover object-center h-48 w-full rounded-lg hover:scale-110 transition duration-300 ease-in-out bg-indigo-100"
                            src={image.webformatURL}
                          />{' '}
                        </div>{' '}
                      </div>
                    ))}{' '}
                  </>
                ) : (
                  <>
                    <div className="text-center content-center justify-center">
                      <img
                        src="https://www.hyperui.dev/photos/confused-travolta.gif"
                        alt="John Travolta confused"
                        className="object-cover w-96 h-64 rounded-lg mt-2 mb-2 m-auto"
                      />
                      <span className="mt-6 text-gray-500">
                        We cant find anything with{' '}
                        <strong className="font-semibold">{searchTerm}</strong>, try searching
                        again.
                      </span>
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                <div className="text-center content-center justify-center">
                  <img
                    src="https://hosstools.com/wp-content/uploads/2020/10/black-oil-sunflower.jpg"
                    alt="John Travolta confused"
                    className="object-cover w-96 h-64 rounded-lg mt-2 mb-2 m-auto"
                  />

                  <span className="text-gray-500">
                    Type away in the search bar to find beautiful flowers
                  </span>
                </div>
              </>
            )}{' '}
          </div>{' '}
        </div>{' '}
      </section>{' '}
    </>
  );
}

export default App;
