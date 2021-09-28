import * as React from "react";

export const Radio = ({ value = "value", onChange, checked }) => {
  return (
    <li>
      <label className="radio">
        <input
          type="radio"
          value={value}
          onChange={onChange}
          checked={checked}
        />
        <span>{value}</span>
      </label>
    </li>
  );
};
