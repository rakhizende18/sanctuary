
import { HEADERS } from "../../../constants";
function BestMatchHeader({fullname}) {
  const {NAME, TYPE, SCORE} = HEADERS
  return (
    <>
      <div className="adopterItem">{fullname}</div>
      <div className="petHeader">
        <div>{NAME}</div>
        <div>{TYPE}</div>
        <div>{SCORE}</div>
      </div>
    </>
  );
}

export default BestMatchHeader;
