import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { HEADERS, BUTTON_LABELS } from "../../constants";
import { UserContext } from "../../App";
import InputField from "../../common/InputField";
import Button from "../../common/Button";
import { useInputChange} from '../../common/hooks/useInputChange';
import "./login.css";
import Error from "./Error";
import { getLoggedInUser } from "./utitls";

function Login() {
  const { formDetails, handleChange, resetForm } = useInputChange();

  const [isError, setIsError] = useState(false);

  const { setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigateToDashboard();
    resetForm();
  };

  const navigateToDashboard = () => {
    const loggedInUserDetails = getLoggedInUser(formDetails);
    if (!loggedInUserDetails) {
      setIsError(true);
    } else {
      setIsError(false);
      setLoggedInUser(loggedInUserDetails);
      navigate("/dashboard");
    }
  };
  return (
    <div className="container">
      <h1>{HEADERS.LOGIN}</h1>
      <form>
        <InputField
          type="text"
          name="username"
          label="Username"
          value={formDetails?.username}
          handleChange={handleChange}
        />
        <InputField
          type="password"
          name="password"
          label="Password"
          value={formDetails?.password}
          handleChange={handleChange}
        />
        <Button handleSubmit={handleSubmit}>{BUTTON_LABELS.LOGIN_BTN}</Button>
        {isError && <Error />}
      </form>
    </div>
  );
}

export default Login;
