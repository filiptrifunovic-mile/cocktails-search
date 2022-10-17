import Cocktails from "./Cocktails";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

function CocktailList() {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        No Cocktails matched your search criteria.
      </h2>
    );
  }

  return <div>CocktailList</div>;
}

export default CocktailList;
