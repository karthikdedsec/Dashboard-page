import { useEffect, useState } from "react";

const TableRow = ({ user }) => (
  <tr className="border">
    <td className="border px-4 py-2">{user.id}</td>
    <td className="border px-4 py-2">{user.name}</td>
    <td className="border px-4 py-2">{user.quantity}</td>
    <td className="border px-4 py-2">{user.price}</td>
  </tr>
);

const Table = () => {
  const [data, setData] = useState([]);
  const headers = ["ID", "Name", "Quantity", "Price"];
  //   const data = [
  //     { id: 1, name: "John Doe", quantity: 25, price: "john@example.com" },
  //     { id: 2, name: "Jane Doe", quantity: 30, price: "john@example.com" },
  //     { id: 3, name: "Bob Smith", quantity: 22, price: "john@example.com" },
  //     { id: 3, name: "Bob Smith", quantity: 22, price: "john@example.com" },
  //     { id: 3, name: "Bob Smith", quantity: 22, price: "john@example.com" },
  //   ];

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

  return (
    <div className="bg-white w-[68%] rounded-lg shadow-lg">
      <table className="w-full h-20 border rounded">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="border px-4 py-2">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <TableRow key={index} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
