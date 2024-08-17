import { useState } from "react";

const MatrixGenerator = ({
  onGenerate,
}: {
  onGenerate: (rows: number, columns: number) => void;
}) => {
  const [rows, setRows] = useState<number>(0);
  const [columns, setColumns] = useState<number>(0);

  return (
    <div className="container md:mx-auto md:p-6 bg-white shadow-md rounded-md  py-8">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">
        Matrix Generator
      </h2>
      <h1>{/* {rows} {columns} */}</h1>
      <div className="grid md:grid-cols-3 md:gap-10 md:px-60 px-4 gap-4">
        <input
          type="number"
          placeholder="Rows"
          value={rows}
          onChange={(e) => setRows(Number(e.target.value))}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
        />
        <input
          type="number"
          placeholder="Columns"
          value={columns}
          onChange={(e) => setColumns(Number(e.target.value))}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500  text-gray-900"
        />
        <button
          onClick={() => onGenerate(rows, columns)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Generate Matrices
        </button>
      </div>
    </div>
  );
};

export default MatrixGenerator;
