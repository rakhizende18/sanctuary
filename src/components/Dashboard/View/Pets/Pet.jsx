import "./pets.css";
import PetDetails from "./PetDetails";

function Pet({ currentItems, setEditPetDetails }) {

  return (
    <div className="petCardContainer">
      <div className="petCards">
        {currentItems?.map((pet) => (
          <PetDetails key={pet.id} pet={pet} setEditPetDetails={setEditPetDetails}/>
        ))}
      </div>
    </div>
  );
}
export default Pet;
