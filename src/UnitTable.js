
import { useTable } from "react-table";
import useLoadData from "./useLoadData";

const UnitTable = (props) => {

    const {unitType, columns} = props;
    const { data, error } = useLoadData(unitType, []);
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data });
    
      return (
        <div className="table-responsive">   
          { error && <div className="error">{ error }</div>}
          { rows &&
              <table {...getTableProps()} className="table table-striped table-sm">
              <thead>
                  {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map(column => (
                      <th
                        {...column.getHeaderProps()}
                      >
                        {column.render('Header')}
                      </th>
                      ))}
                  </tr>
                  ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                  {rows.map(row => {
                  prepareRow(row)
                  return (
                      <tr {...row.getRowProps()}>
                      {row.cells.map(cell => {
                          return (
                          <td
                              {...cell.getCellProps()}
                          >
                              {cell.render('Cell')}
                          </td>
                          )
                      })}
                      </tr>
                  )
                  })}
              </tbody>
              </table>
          }
          </div>
      )
};

export default UnitTable;

