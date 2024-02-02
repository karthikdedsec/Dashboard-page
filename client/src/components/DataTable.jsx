import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

function DataTablec() {
  const column = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Quantity",
      selector: (row) => row.quantity,
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },
  ];

  const [data, setData] = useState([]);

  //fetch table data

  useEffect(() => {
    const fetchTableData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/table");

        const resData = await res.json();

        setData(resData);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchTableData();
  }, []);

  //   console.log(data);
  return (
    <div className="max-w-3xl rounded-lg shadow-lg">
      <DataTable columns={column} data={data}></DataTable>
    </div>
  );
}
export default DataTablec;
