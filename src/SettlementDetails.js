import { useParams } from "react-router-dom";
import { DETAIL_HEADING, DETAIL_PANEL } from "./LinkUtils";
import useLoadData from "./useLoadData"; 

const SettlementDetails = () => {
  const { id } = useParams();
  const { data: settlement, error, isPending } = useLoadData(`settlement/${id}`);

  return (
    <div className={DETAIL_PANEL}>
      { isPending && <div>Loading...</div> }
      { error && <div className="error">{ error }</div> }
      { settlement && (
        <article>
          <h2 className={DETAIL_HEADING}>{ settlement.name }</h2>
          <p><label>Reporting Authority:</label>{ settlement.authority.name }</p>
          <p><label>Power:</label>{ settlement.power } Kw</p>
          <p><label>Citizens:</label>{ settlement.persons }</p>
        </article>
      )}
    </div>
  );
}
 
export default SettlementDetails;