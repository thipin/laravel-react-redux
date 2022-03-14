import React from "react";

import { useSelector, useDispatch } from "react-redux";

import * as numberActions from "../redux/actions/number";

const Home = () => {
  const dispatch = useDispatch();
  const numberReducer = useSelector(({ numberReducer }) => numberReducer);


  return (
    <div>
      <button type="button" onClick={() => dispatch(numberActions.setNumber(1))}>เพิ่ม</button>
      &nbsp;
      <button type="button" onClick={() => dispatch(numberActions.setNumber(-1))}>ลด</button>
      <hr/>
      <span>{numberReducer.count} </span>
    </div>
  );
};

export default Home;
