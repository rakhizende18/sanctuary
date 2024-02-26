import { useSelector } from "react-redux";
import { HEADERS } from "../../../../constants";
import { getAdopters } from "../../../../reducers/adopters.slice";
import './adopters.css'

function Adopters() {
  const adopters = useSelector(getAdopters);

  return (
    <>
      <h1>{HEADERS.ADOPTER}</h1>
      <table>
        <tbody>
          <tr>
            <th>Adopter</th>
            <th>Pet type</th>
          </tr>
          {adopters.map((adopter) => (
            <tr key={adopter.id}>
              
              <td>
                <div>{adopter.fullname}</div>
              </td>
              <td>
                <div>{adopter.preference.toString()}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Adopters;
