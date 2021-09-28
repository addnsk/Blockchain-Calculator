import * as React from "react";

export const SubmitButton = React.memo(({ isDisabled }) => {
  return <input type="submit" value="Count" disabled={isDisabled} />;
});
