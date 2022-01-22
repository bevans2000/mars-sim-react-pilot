import { Link } from "react-router-dom";

export function UnitLink(props) {
    const link = "/" + props.type + "/" + props.id;
    return (
        <span><Link to={link}>{props.label}</Link></span>
    )  
}


export function UnitCell (props) {
    const {row, column} = props;
    return (
        <UnitLink type={row.original[column.unitTypeProp]} id={row.original[column.unitIdProp]}
                  label={row.original.name} />
    )  
}
