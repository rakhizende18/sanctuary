import BestMatchHeader from "./BestMatchHeader";
import BestMatchedItem from "./BestMatchedItem";

export function BestMatchedList({ currentItems, handleAccept }) {
  const getSortedMatch = (bestMatched) => {
    return bestMatched.sort((a, b) => {
      return b.score - a.score;
    });
  };
  return (
    <section>
      {currentItems?.map(({ fullname, bestMatched, id: adopterId }) => (
        <>
          <BestMatchHeader key={adopterId} fullname={fullname}/>
          {getSortedMatch(bestMatched).map((pet) => (
            <BestMatchedItem
              key={pet.id}
              pet={pet}
              adopterId={adopterId}
              handleAccept={handleAccept}
            />
          ))}
        </>
      ))}
    </section>
  );
}
