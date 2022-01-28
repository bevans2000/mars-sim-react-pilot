import { Accordion } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { UnitLink, DETAIL_PANEL, DETAIL_HEADING} from "./LinkUtils";
import useLoadData from "./useLoadData"; 

const PersonDetails = () => {
  const { id } = useParams();
  const { data: person, error, isPending } = useLoadData(`person/${id}`);

  return (
    <div className={DETAIL_PANEL}>
      { isPending && <div>Loading...</div> }
      { error && <div className="error">{ error }</div> }
      { person && (
        <div>
        <h2 className={DETAIL_HEADING}>{ person.name }</h2>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>General</Accordion.Header>
            <Accordion.Body>
              <p><label>Gender:</label>{ person.gender }</p>
              <p><label>Building:</label>{ person.building }</p>
              <p><label>Settlement:</label><UnitLink reference={person.settlement} /> </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Task</Accordion.Header>
            <Accordion.Body>
              <p><label>Task:</label>{ person.task }</p>
            </Accordion.Body>
          </Accordion.Item>   
          <Accordion.Item eventKey="2">
            <Accordion.Header>Authority {person.authority.name}</Accordion.Header>
            <Accordion.Body>
              <p><label>Objective:</label>{ person.authority.objective }</p>
            </Accordion.Body>
          </Accordion.Item>          
        </Accordion>
        </div>
      )}
    </div>
  ); 
}

export default PersonDetails;