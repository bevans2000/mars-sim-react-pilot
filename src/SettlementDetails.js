import { useParams } from "react-router-dom";
import useLoadData from "./useLoadData"; 

const SettlementDetails = () => {
  const { id } = useParams();
  const { data: settlement, error, isPending } = useLoadData(`settlement/${id}`);

  return (
    <div className="unit-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { settlement && (
        <article>
          <h2>{ settlement.name }</h2>
          <p>Reporting Authority: { settlement.authority }</p>
          <p>Power: { settlement.power } Kw</p>
          <p>Citizens: { settlement.persons }</p>
        </article>
      )}
    </div>
  );
}
 
export default SettlementDetails;