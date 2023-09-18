import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiFillCloseCircle,
} from "react-icons/ai";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const reduceAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency} {props.cost}
      </td>
      <td>
        <AiFillPlusCircle
          size="1.5em"
          onClick={(event) => increaseAllocation(props.name)}
          style={{ color: "green" }}
        ></AiFillPlusCircle>
      </td>
      <td>
        <AiFillMinusCircle
          size="1.5em"
          onClick={(event) => reduceAllocation(props.name)}
          style={{ color: "red" }}
        ></AiFillMinusCircle>
      </td>
      <td>
        <AiFillCloseCircle
          size="1.5em"
          onClick={handleDeleteExpense}
        ></AiFillCloseCircle>
      </td>
    </tr>
  );
};

export default ExpenseItem;
