import { useMemo } from "react";
import { useTable } from "react-table";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const PersonTable = () => {

    const { data, error } = useFetch('person/', []);

    const UnitCell = (props) => {
        const {row, column} = props;
        const link = "/" + row.original[column.unitTypeProp] + "/" + row.original[column.unitIdProp];
        return (
            <span><Link to={link}>{row.original.name}</Link></span>
        )  
    }

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
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data });
    
      return (
        <div>        
            <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
            <thead>
                {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                    <th
                        {...column.getHeaderProps()}
                        style={{
                        borderBottom: 'solid 3px red',
                        background: 'aliceblue',
                        color: 'black',
                        fontWeight: 'bold',
                        }}
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
                            style={{
                            padding: '10px',
                            border: 'solid 1px gray',
                            background: 'papayawhip',
                            }}
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
        </div>
      )
};

export default PersonTable;

