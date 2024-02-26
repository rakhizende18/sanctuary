import { useDispatch, useSelector } from "react-redux";
import { HEADERS } from "../../../constants";
import { getPets, removePet } from "../../../reducers/pets.slice";
import { getAdopters } from "../../../reducers/adopters.slice";
import { removeAdopter } from "../../../reducers/adopters.slice";
import { useCallback, useEffect, useState } from "react";
import "./bestMatch.css";
import { BestMatchedList } from "./BestMatchedList";
import { findBestMatches } from "./utils";

function BestMatch() {
  const [bestMatchData, setBestMatchData] = useState();
  const dispatch = useDispatch();
  
  const {BEST_MATCH} = HEADERS
 
  const pets = useSelector(getPets);
  const adopters = useSelector(getAdopters);

  const bestMatch = useCallback(() => {
    setBestMatchData(findBestMatches(adopters, pets));
  }, [adopters, pets]);

  useEffect(() => {
    bestMatch();
  }, [pets, adopters, bestMatch]);

  const handleAccept = (adopterId, petId) => {
    dispatch(removePet(petId));
    dispatch(removeAdopter(adopterId));
  };
  return (
    <>
      <h1>{BEST_MATCH}</h1>
      <BestMatchedList currentItems={bestMatchData} handleAccept={handleAccept} />
    </>
  );
}

export default BestMatch;
