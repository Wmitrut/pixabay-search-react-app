import { useEffect, useRef, useState } from 'react';
import './App.css';
import Empty from './Components/Empty';
import Image from './Components/Image';
import NoResults from './Components/NoResults';
import HeaderSearch from './Components/HeaderSearch/index';

const fetchImages = async (searchTerm) => {
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

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(null);
  const inputRef = useRef();

  useEffect(() => {
    if (!searchTerm) {
      setData(null);
      return;
    }
    fetchImages(searchTerm).then((data) => {
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
    inputRef.current.focus();
  };

  return (
    <>
      <HeaderSearch
        searchTerm={searchTerm}
        inputRef={inputRef}
        handleOnSubmit={handleOnSubmit}
        handleOnReset={handleOnReset}
      />
      <section className="content-center justify-center overflow-hidden text-gray-700">
        <div className="container mx-auto py-2 px-5 lg:px-32 lg:pt-12">
          <div className="-m-1 flex flex-wrap justify-center md:-m-2">
            {data !== null ? (
              <>
                {data.length > 0 ? (
                  <>
                    {data.map((image, index) => (
                      <Image image={image} index={index} key={index} />
                    ))}
                  </>
                ) : (
                  <NoResults searchTerm={searchTerm} handleOnReset={handleOnReset} />
                )}
              </>
            ) : (
              <Empty />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
