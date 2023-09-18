import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { dispatch, currency } = useContext(AppContext);
  const [newCurrency, setNewCurrency] = useState(currency);

  return (
    <div className="alert alert-success">
      <span>Currency: </span>
      <select
        onChange={(event) => {
          setNewCurrency(event.target.value);
          dispatch({
            type: "CHG_CURRENCY",
            payload: event.target.value,
          });
        }}
      >
        <option value="$" name="$ Dollar">
          $ Dollar
        </option>
        <option value="£" name="£ Pound">
          £ Pound
        </option>
        <option value="€" name="€ Euro">
          € Euro
        </option>
        <option value=" ₹" name=" ₹ Ruppee">
          ₹ Ruppee
        </option>
      </select>
    </div>
  );
};

export default Budget;
