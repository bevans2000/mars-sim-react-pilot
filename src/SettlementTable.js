import { useMemo } from "react";
import UnitTable from "./UnitTable";
import { UnitCell } from "./LinkUtils";

const SettlementTable = () => {

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
            Header: 'Power',
            accessor: 'power',
          }
        ],
        []
      )

    return (
        <UnitTable unitType="settlement" columns={columns} />
      );
};

export default SettlementTable;

