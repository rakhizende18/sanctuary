import { useDispatch } from "react-redux";
import { BUTTON_LABELS, CHOOSE_TYPE } from "../../../../constants";
import { addPet, editPet } from "../../../../reducers/pets.slice";
import WithModal from "../../../../hoc/WithModal";
import { petsList, petsPersonality } from "../../../../mocks";
import InputField from "../../../../common/InputField";
import Button from "../../../../common/Button";
import { useInputChange } from "../../../../common/hooks/useInputChange";

function AddPetForm({ editPetDetails = {}, closeModal }) {
  const dispatch = useDispatch();
  const { EDIT_PET_BTN, ADD_PET_BTN } = BUTTON_LABELS;
  const isEditPetForm = !!Object.keys(editPetDetails).length;

  const { formDetails, handleChange, resetForm } =
    useInputChange(editPetDetails);

  const handleAddEditPet = (e) => {
    e.preventDefault();
    if (isEditPetForm) {
      dispatch(editPet(formDetails));
    } else {
      dispatch(addPet(formDetails));
    }
    closeModal();
    resetForm();
  };

  return (
    <form>
      <h2>{isEditPetForm ? EDIT_PET_BTN : ADD_PET_BTN}</h2>
      <InputField
        label="Name:"
        type="text"
        name="name"
        value={formDetails?.name}
        handleChange={handleChange}
      />
      <InputField
        label="Age:"
        type="text"
        name="age"
        value={formDetails?.age}
        handleChange={handleChange}
      />
      <label>{CHOOSE_TYPE}</label>
      <select
        id="type"
        name="type"
        onChange={handleChange}
        value={formDetails?.type}
      >
        {petsList.map((pet) => (
          <option key={pet} value={pet}>
            {pet}
          </option>
        ))}
      </select>
      <div className="checkboxgroup">
        {petsPersonality.map((personality, index) => {
          return (
            <InputField
              key={index}
              type="checkbox"
              id="friendly"
              name="personality"
              value={personality.toLowerCase()}
              label={personality}
              handleChange={handleChange}
              checked={formDetails?.personality?.includes(
                personality.toLowerCase()
              )}
            />
          );
        })}
      </div>
      <Button handleSubmit={handleAddEditPet}>
        {isEditPetForm ? EDIT_PET_BTN : ADD_PET_BTN}
      </Button>
    </form>
  );
}

export default WithModal(AddPetForm);
