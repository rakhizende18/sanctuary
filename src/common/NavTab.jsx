import { NavLink } from "react-router-dom";
import "./css/navTab.css";
export const NavTab = ({ path,children }) => {
  return (
    <label className="tab">
      <NavLink to={path}>{children}</NavLink>
    </label>
  );
}

export default NavTab;
