import { useMemo } from "react";
import UnitTable from "./UnitTable";
import { UnitCell } from "./LinkUtils";

const SettlementTable = () => {

    const columns = useMemo(
        () => [
          {
            Header: 'Name',
            accessor: 'name',
            Cell: UnitCell
          },
          {
            Header: 'Power',
            accessor: 'power',
          },
          {
            Header: 'Oxygen',
            accessor: 'oxygen',
          },
          {
            Header: 'Hydrogen',
            accessor: 'hydrogen',
          },
          {
            Header: 'Water',
            accessor: 'water',
          },
          {
            Header: 'Methane',
            accessor: 'methane',
          }
        ],
        []
      )

    return (
        <UnitTable unitType="settlement" columns={columns} />
      );
};

export default SettlementTable;

