import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const PersonDetails = () => {
  const { id } = useParams();
  const { data: person, error, isPending } = useFetch('person/' + id);

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
        </article>
      )}
    </div>
  );
}
 
export default PersonDetails;