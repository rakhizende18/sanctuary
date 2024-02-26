import { useState } from "react";

export const useInputChange = (initialState = {}) => {
  const [formDetails, setFormDetails] = useState(initialState);

  const handleChangeCheckBox = (event) => {
    const selectedValue = event.target.value;
    const selectedName = event.target.name;

    if (event.target.checked) {
      return {
        [selectedName]: [
          ...(formDetails[selectedName] ? formDetails[selectedName] : []),
          selectedValue,
        ],
      };
    } else {
      return {
        [selectedName]: formDetails.personality.filter(
          (personality) => personality !== selectedValue
        ),
      };
    }
  };

  const handleChange = (event) => {
    if (event.target.type === "checkbox") {
      setFormDetails({
        ...formDetails,
        ...handleChangeCheckBox(event),
      });
    } else {
      setFormDetails({
        ...formDetails,
        [event.target.name]: event.target.value,
      });
    }
  };

  const resetForm = () => {
    setFormDetails();
  };

  return { formDetails, handleChange, resetForm };
};
