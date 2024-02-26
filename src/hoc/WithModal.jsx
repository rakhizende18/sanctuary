import { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};


const WithModal = (WrappedComponent) => {

  const WithStateComponent = (props) => {

    const [modalIsOpen, setIsOpen] = useState(props.isOpen);

    function closeModal() {
      setIsOpen(false);
      props.setEditPetDetails()
      props.setIsOpenAddForm()
    }
    
    return (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <WrappedComponent  {...props} closeModal={closeModal} />
        <button onClick={closeModal}>Close</button>
      </Modal>
    );
  };
  return WithStateComponent;
};

export default WithModal
