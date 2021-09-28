import * as React from "react";
import { NumberInput } from "../numberInput";
import { RadioSet, ADDITION } from "../radioSet";
import { SubmitButton } from "../submitButton";

export const Form = ({ onResult, onError }) => {
  const [firstValue, setFirstValue] = React.useState("");
  const [secondValue, setSecondValue] = React.useState("");
  const [operation, setOperation] = React.useState(ADDITION);

  const isDisabled = !firstValue || !secondValue || !operation;

  const handleNumberInputChange = (func) => (e) => {
    if (e.target.validity.valid || e.target.value === "") {
      func(e.target.value);
      onError("");
    } else {
      onError("only number");
    }
  };

  const handleRadioChange = (e) => {
    setOperation(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const url = `http://localhost:8000/count?first=${firstValue}&second=${secondValue}&operation=${operation}`;
    onResult("pending...");
    fetch(url)
      .then((res) => res.json())
      .then(({ value }) => onResult(value))
      .catch((e) => {
        onError("fetching error");
        onResult("");
      });
  };

  return (
    <form className="form" onSubmit={handleSubmitForm}>
      <NumberInput
        label="First value:"
        value={firstValue}
        onChange={handleNumberInputChange(setFirstValue)}
      />
      <NumberInput
        label="Second value:"
        value={secondValue}
        onChange={handleNumberInputChange(setSecondValue)}
      />
      <RadioSet operation={operation} onChange={handleRadioChange} />
      <SubmitButton isDisabled={isDisabled} />
    </form>
  );
};
