const Image = (props) => {
  return (
    <div
      className="flex max-w-xs flex-wrap overflow-hidden  rounded-lg md:w-1/2 lg:w-1/4"
      key={props.index}>
      <div className="w-full max-w-xs overflow-hidden  p-1 md:p-2">
        <img
          alt={props.image.tags}
          loading="lazy"
          className="block h-48 w-full rounded-lg bg-indigo-100 object-cover object-center transition duration-300 ease-in-out hover:scale-110"
          src={props.image.webformatURL}
        />
      </div>
    </div>
  );
};

export default Image;
