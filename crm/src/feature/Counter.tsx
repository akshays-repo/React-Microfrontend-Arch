import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { decrement, increment } from "./counter.slice";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <Button onClick={() => dispatch(increment())} variant="contained">
          Increment crm
        </Button>

        <span>
          <Chip label={count} />
        </span>
        <Button onClick={() => dispatch(decrement())} variant="contained">
          Increment crm
        </Button>
      </div>
    </div>
  );
}
