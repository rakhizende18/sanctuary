import { useDispatch } from "react-redux";
import { BUTTON_LABELS } from "../../../../constants";
import { removePet } from "../../../../reducers/pets.slice";
import "./pets.css";
import PetItem from "./PetItem";

function PetDetails({ pet, setEditPetDetails }) {
  const dispatch = useDispatch();

  const {EDIT_BTN, DELETE_BTN} =  BUTTON_LABELS
  const { id, name, type, age, personality } = pet;

  const handleDelete = (id) => {
    dispatch(removePet(id));
  };
  return (
    <div className="petDetailsContainer" key={id}>
      <div className="petDetailsLink">
        <div className="petDetailsBg"></div>
        <div className="petDetailsHeader">
          {name}
          <div className="buttonContainer">
            <button onClick={() => setEditPetDetails(pet)}>{EDIT_BTN}</button>
            <button onClick={() => handleDelete(id)}>{DELETE_BTN}</button>
          </div>
        </div>
        <PetItem label="Pet Type:" value={type} />
        <PetItem label="Age:" value={age} />
        <PetItem label="Personality:" value={personality} />
        <PetItem label="" value="Learn more.." />
      </div>
    </div>
  );
}

export default PetDetails;
