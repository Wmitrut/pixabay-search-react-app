const HeaderSearch = (props) => {
  return (
    <header className="flex flex-row items-center justify-center border-b-2 border-indigo-100 p-2">
      <form onSubmit={props.handleOnSubmit}>
        <input
          ref={props.inputRef}
          focus="true"
          className="h-10 w-full rounded-lg border-2 border-indigo-500/50 bg-white pr-10 pl-4 text-sm shadow-sm hover:border-indigo-500/80  focus:border-indigo-500 focus:ring-0 sm:w-80"
          id="search"
          placeholder="Type away any thing you want to search"
          defaultValue={props.searchTerm}
          aria-label="Search"
        />
        <div className={'mt-2 flex items-center justify-center'}>
          <button
            type="button"
            onClick={props.handleOnSubmit}
            className="ml-2 rounded bg-indigo-500 py-2 px-4 font-bold text-white hover:bg-indigo-700 disabled:bg-indigo-500/20">
            Search
          </button>{' '}
          <button
            type="button"
            onClick={props.handleOnReset}
            disabled={props.searchTerm == ''}
            className="ml-2 rounded bg-indigo-400 py-2 px-4 font-bold text-white hover:bg-indigo-500 disabled:bg-indigo-500/20">
            Clear Search
          </button>
        </div>
      </form>
    </header>
  );
};

export default HeaderSearch;
