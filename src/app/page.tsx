"use client";

import React, { useState } from "react";
import MatrixGenerator from "../components/MatrixGenerator";
import Matrix from "../components/Matrix";
import { MatrixOperations } from "../components/MatrixOperations";

const Home = () => {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [matrixA, setMatrixA] = useState<number[][]>([]);
  const [matrixB, setMatrixB] = useState<number[][]>([]);
  const [resultMatrix, setResultMatrix] = useState<number[][]>([]);

  const generateMatrices = (r: number, c: number) => {
    setRows(r);
    setColumns(c);
    setMatrixA(Array.from({ length: r }, () => Array(c).fill(0)));
    setMatrixB(Array.from({ length: r }, () => Array(c).fill(0)));
  };

  return (
    <div className="py-8 min-h-screen bg-slate-100">
      <h1 className="text-[#FF8343] text-center text-8xl">mCal</h1>
      <MatrixGenerator onGenerate={generateMatrices} />
      <div className="container mx-auto p-6 shadow-md rounded-md">
        <div className="grid md:grid-cols-2 mt-6">
          <div>
            <h3 className="text-xl font-semibold text-center mb-4 text-gray-700">
              Matrix A
            </h3>
            <Matrix matrix={matrixA} onMatrixChange={setMatrixA} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-center mb-4 text-gray-700">
              Matrix B
            </h3>
            <Matrix matrix={matrixB} onMatrixChange={setMatrixB} />
          </div>
        </div>
      </div>
      <MatrixOperations
        matrixA={matrixA}
        matrixB={matrixB}
        onResult={setResultMatrix}
      />
      {resultMatrix.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">
            Result Matrix
          </h2>
          <Matrix matrix={resultMatrix} onMatrixChange={() => {}} />
        </div>
      )}
    </div>
  );
};

export default Home;
