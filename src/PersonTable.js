import { useMemo } from "react";
import { UnitCell } from "./LinkUtils";
import UnitTable from "./UnitTable";

// A Unit table showing all Persons
const PersonTable = () => {

    const columns = useMemo(
        () => [
          {
            Header: 'Name',
            accessor: 'name',
            unitTypeProp: 'type',
            unitIdProp: 'id',
            Cell: UnitCell
          },
          {
            Header: 'Gender',
            accessor: 'gender',
          },
          {
            Header: 'Building',
            accessor: 'building',
          },
        ],
        []
      )
    
      return (
        <UnitTable unitType="person" columns={columns} />
      )
};

export default PersonTable;

