import * as React from "react";
import { Radio } from "./Radio";
import { ADDITION, DIVISION, MULTIPLY, SUBTRACT } from "./consts";

const list = [ADDITION, SUBTRACT, MULTIPLY, DIVISION];

export const RadioSet = ({ operation, onChange }) => {
  const isRadioSelected = (value) => operation === value;
  return (
    <ul className="operations">
      {list.map((item) => (
        <Radio
          key={item}
          value={item}
          onChange={onChange}
          checked={isRadioSelected(item)}
        />
      ))}
    </ul>
  );
};
