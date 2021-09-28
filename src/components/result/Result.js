import * as React from "react";

export const Result = ({ result }) => {
  return (
    <section className="result">
      <p>Result:</p>
      <p>{result}</p>
    </section>
  );
};
