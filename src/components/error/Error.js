import * as React from "react";

export const Error = ({ error }) => {
  return (
    <>
      {!!error && (
        <section className="error">
          <p>Warning: {error}</p>
        </section>
      )}
    </>
  );
};
