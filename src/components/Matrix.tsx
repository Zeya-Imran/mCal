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
  const numColumns = matrix.length > 0 ? matrix[0].length : 1;
  console.log(numColumns);
  return (
    <div className="container mx-auto p-6 border">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${numColumns}, minmax(0, 1fr))`, // Dynamic grid columns
        }}
      >
        {matrix.map((row, i) =>
          row.map((cell, j) => (
            <input
              key={`${i}-${j}`}
              placeholder={`${i},${j}`}
              type="number"
              value={cell === 0 ? "" : cell}
              onChange={(e) => handleChange(Number(e.target.value), i, j)}
              className="
              p-1
              border border-gray-500
              text-center 
               text-gray-900"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Matrix;
