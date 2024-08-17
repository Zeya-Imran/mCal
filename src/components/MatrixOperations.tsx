import React from "react";

const MatrixOperations = ({
  matrixA,
  matrixB,
  onResult,
}: {
  matrixA: number[][];
  matrixB: number[][];
  onResult: (result: number[][]) => void;
}) => {
  return (
    <div className="flex justify-center space-x-4 mt-8">
      <button
        onClick={() => onResult(addMatrices(matrixA, matrixB))}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Add Matrices (+)
      </button>
      <button
        onClick={() => onResult(subtractMatrices(matrixA, matrixB))}
        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
        Subtract Matrices (-)
      </button>
      <button
        onClick={() => onResult(multiplyMatrices(matrixA, matrixB))}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Multiply Matrices (x)
      </button>
    </div>
  );
};

// Helper functions for matrix operations:
const addMatrices = (matrixA: number[][], matrixB: number[][]): number[][] => {
  return matrixA.map((row, i) => row.map((cell, j) => cell + matrixB[i][j]));
};

const subtractMatrices = (
  matrixA: number[][],
  matrixB: number[][]
): number[][] => {
  return matrixA.map((row, i) => row.map((cell, j) => cell - matrixB[i][j]));
};

const multiplyMatrices = (
  matrixA: number[][],
  matrixB: number[][]
): number[][] => {
  const size = matrixA.length;
  const result = Array.from({ length: size }, () => Array(size).fill(0));

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      for (let k = 0; k < size; k++) {
        result[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }
  return result;
};

export { MatrixOperations };
