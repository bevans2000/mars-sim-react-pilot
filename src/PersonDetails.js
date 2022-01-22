import { useParams } from "react-router-dom";
import { UnitLink } from "./LinkUtils";
import useLoadData from "./useLoadData"; 

const PersonDetails = () => {
  const { id } = useParams();
  const { data: person, error, isPending } = useLoadData(`person/${id}`);

  return (
    <div className="unit-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { person && (
        <article>
          <h2>{ person.name }</h2>
          <p>Gender: { person.gender }</p>
          <p>Task: { person.task }</p>
          <p>Building: { person.building }</p>
          <p>Settlement: <UnitLink type="settlement" id={person.settlement.id} label={person.settlement.name} /> </p>
        </article>
      )}
    </div>
  );
}
 
export default PersonDetails;