import { useState } from "react";
import { useSelector } from "react-redux";
import { BUTTON_LABELS,TABS } from "../../../../constants";
import { getPets } from "../../../../reducers/pets.slice";
import "./pets.css";
import AddPetForm from "./AddPetForm";
import PaginatedItems from "./PaginationItem";

function Pets() {
  const [editPetDetails, setEditPetDetails] = useState();
  const [isOpenAddForm, setIsOpenAddForm] = useState(false);

  const pets = useSelector(getPets);
 
  return (
    <>
      <div className="wrappedButton">
        <h1>{TABS.PETS}</h1>
        <button onClick={() => setIsOpenAddForm(true)}>{BUTTON_LABELS.ADD_BTN}</button>
      </div>
      <PaginatedItems
        itemsPerPage={9}
        items={pets}
        setEditPetDetails={setEditPetDetails}
      />
      {(!!editPetDetails || isOpenAddForm) && (
        <AddPetForm
          isOpen={!!editPetDetails || isOpenAddForm}
          editPetDetails={editPetDetails}
          setEditPetDetails={setEditPetDetails}
          setIsOpenAddForm={setIsOpenAddForm}
        />
      )}
    </>
  );
}

export default Pets;
