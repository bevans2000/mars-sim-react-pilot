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
            Cell: UnitCell
          },
          {
            Header: 'Job',
            accessor: 'job',
          },
          {
            Header: 'Role',
            accessor: 'role',
          },
          {
            Header: 'Gender',
            accessor: 'gender',
          },
          {
            Header: 'Building',
            accessor: 'building',
          },
          {
            Header: 'Health',
            accessor: 'health',
          },
          {
            Header: 'Performance',
            accessor: 'performance',
          },
        ],
        []
      )
    
      return (
        <UnitTable unitType="person" columns={columns} />
      )
};

export default PersonTable;

