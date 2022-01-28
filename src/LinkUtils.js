import { Link } from "react-router-dom";

export const DETAIL_PANEL = "detail-panel";
export const DETAIL_HEADING = "detail-heading";

// This maps to the UnitReferenceDTO
export function UnitLink(props) {
    const link = "/" + props.reference.type + "/" + props.reference.identifier;
    return (
        <span><Link className="unit-link" to={link}>{props.reference.name}</Link></span>
    )  
}


export function UnitCell (props) {
    const {row, column} = props;
    return (
        <UnitLink reference={row.original}/>
    )  
}
