function Search({ setSearchResult }) {
  return (
    <div className="">
      <input
        className="rounded-full  px-5 py-2 text-sm leading-5 border border-black text-black"
        onChange={(event) => {
          const value = event.target.value.trim().toLowerCase();
          setSearchResult(value);
        }}
        name="searchInput"
        placeholder="Search"
      />
    </div>
  );
}

export default Search;
