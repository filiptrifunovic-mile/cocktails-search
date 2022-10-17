import { useGlobalContext } from "../context";

function SearchForm() {
  const { setSearchTerm } = useGlobalContext();

  return <div>SearchForm</div>;
}

export default SearchForm;
