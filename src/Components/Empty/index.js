import Sunflower from '../../Assets/sunflower.jpeg';

const Empty = () => {
  return (
    <div className="content-center justify-center text-center">
      <img
        src={Sunflower}
        alt="Sunflower field"
        className="m-auto my-2 h-64 w-96 rounded-lg object-cover"
      />
      <span className="text-gray-500">
        Type away in the search bar to find beautiful flowers and more...
      </span>
    </div>
  );
};

export default Empty;
