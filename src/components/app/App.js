import * as React from "react";
import { Result } from "../result";
import { Error } from "../error";
import { Form } from "../form";

export const App = () => {
  const [result, setResult] = React.useState("");
  const [error, setError] = React.useState("");

  return (
    <main className="layout">
      <h1 className="header">Blockchain Calculator</h1>
      <Form onResult={setResult} onError={setError} />
      <Result result={result} />
      <Error error={error} />
    </main>
  );
};
