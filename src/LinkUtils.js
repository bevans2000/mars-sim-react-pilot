import { Link } from "react-router-dom";

export const DETAIL_PANEL = "detail-panel";
export const DETAIL_HEADING = "detail-heading";

export function UnitLink(props) {
    const link = "/" + props.type + "/" + props.id;
    return (
        <span><Link className="unit-link" to={link}>{props.label}</Link></span>
    )  
}


export function UnitCell (props) {
    const {row, column} = props;
    return (
        <UnitLink type={row.original[column.unitTypeProp]} id={row.original[column.unitIdProp]}
                  label={row.original.name} />
    )  
}
