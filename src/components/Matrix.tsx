import React from "react";

const Matrix = ({
  matrix,
  onMatrixChange,
}: {
  matrix: number[][];
  onMatrixChange: (matrix: number[][]) => void;
}) => {
  const handleChange = (value: number, row: number, col: number) => {
    const newMatrix = [...matrix];
    newMatrix[row][col] = value;
    onMatrixChange(newMatrix);
  };

  return (
    <div className="container mx-auto p-6 border">
      <div className="grid grid-cols-3 gap-2">
        {matrix.map((row, i) =>
          row.map((cell, j) => (
            <input
              key={`${i}-${j}`}
              placeholder={`${i + 1},${j + 1}`}
              type="number"
              value={cell === 0 ? "" : cell}
              onChange={(e) => handleChange(Number(e.target.value), i, j)}
              className="
              border 
              p-2 
              rounded 
              w- 6/12
              text-center 
              focus:outline-none 
              focus:ring-2 focus:ring-green-500
               text-gray-900"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Matrix;
