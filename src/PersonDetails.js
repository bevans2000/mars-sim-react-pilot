import { useParams } from "react-router-dom";
import { UnitLink, DETAIL_TITLE, DETAIL_PANEL, DETAIL_LABEL, DETAIL_VALUE } from "./LinkUtils";
import useLoadData from "./useLoadData"; 

const PersonDetails = () => {
  const { id } = useParams();
  const { data: person, error, isPending } = useLoadData(`person/${id}`);

  return (
    <div className={DETAIL_PANEL}>
      { isPending && <div>Loading...</div> }
      { error && <div className="error">{ error }</div> }
      { person && (
        <article>
          <h2>{ person.name }</h2>
          <p><label>Gender:</label>{ person.gender }</p>
          <p><label>Task:</label>{ person.task }</p>
          <p><label>Building:</label>{ person.building }</p>
          <p><label>Settlement:</label><UnitLink type="settlement" id={person.settlement.id} label={person.settlement.name} /> </p>
        </article>
      )}
    </div>
  ); 
}
 
export default PersonDetails;