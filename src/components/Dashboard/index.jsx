import { Outlet } from "react-router-dom";
import { TABS } from "../../constants";
import {NavTab} from '../../common/NavTab'
import "./dashboard.css";
import './BestMatch/utils'

function Dashboard() {
  const {PETS, ADOPTERS, BEST_MATCH} = TABS
  return (
    <>
      <h1>Dashboard</h1>
      <div className="tabs">
        <NavTab path='pets'>{PETS}</NavTab>
        <NavTab path='adopters'>{ADOPTERS}</NavTab>
        <NavTab path='bestmatch'>{BEST_MATCH}</NavTab>
      </div>
      <Outlet />
      
    </>
  );
}

export default Dashboard;
