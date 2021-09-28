import * as React from "react";

export const NumberInput = ({ label = "label", value, onChange }) => {
  return (
    <label className="label">
      {label}
      <input
        type="text"
        value={value ? value : ""}
        onChange={onChange ? onChange : null}
        pattern="[0-9]*"
        maxLength={16}
        required
      />
    </label>
  );
};
