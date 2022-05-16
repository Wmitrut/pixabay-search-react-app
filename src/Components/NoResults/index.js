import Travolta from '../../Assets/travolta.gif';

const NoResults = (props) => {
  return (
    <div className="content-center justify-center text-center">
      <img
        src={Travolta}
        alt="John Travolta confused"
        className="object-cover m-auto my-2 w-96 h-64 rounded-lg"
      />
      <div className="content-center justify-center text-center">
        <span className="mt-6 text-gray-500">
          We cant find anything with <strong className="font-semibold">{props.searchTerm}</strong>,
          try searching again.
        </span>

        <button
          type="button"
          onClick={props.handleOnReset}
          disabled={props.searchTerm == ''}
          className="ml-2 rounded bg-indigo-400 py-2 px-4 font-bold text-white hover:bg-indigo-500 disabled:bg-indigo-500/20"
        >
          Clear Search
        </button>
      </div>
    </div>
  );
};

export default NoResults;
