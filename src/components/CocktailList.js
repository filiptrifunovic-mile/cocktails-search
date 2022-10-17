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

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktails key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

export default CocktailList;
