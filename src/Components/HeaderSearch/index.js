const HeaderSearch = (props) => {
  return (
    <header className="flex flex-row justify-center items-center p-2 border-b-2 border-indigo-100 2">
      <form onSubmit={props.handleOnSubmit}>
        <input
          ref={props.inputRef}
          focus="true"
          className="pr-10 pl-4 w-full h-10 text-sm bg-white rounded-lg border-2 border-indigo-500/50 hover:border-indigo-500/80 focus:border-indigo-500  focus:ring-0 shadow-sm sm:w-80"
          id="search"
          placeholder="Type away any thing you want to search"
          defaultValue={props.searchTerm}
          aria-label="Search"
        />
        <div className={'mt-2'}>
          <button
            type="button"
            onClick={props.handleOnSubmit}
            className="py-2 px-4 ml-2 font-bold text-white bg-indigo-500 hover:bg-indigo-700 disabled:bg-indigo-500/20 rounded">
            Search
          </button>{' '}
          <button
            type="button"
            onClick={props.handleOnReset}
            disabled={props.searchTerm == ''}
            className="py-2 px-4 ml-2 font-bold text-white bg-indigo-400 hover:bg-indigo-500 disabled:bg-indigo-500/20 rounded">
            Clear Search
          </button>
        </div>
      </form>
    </header>
  );
};

export default HeaderSearch;
