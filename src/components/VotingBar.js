import React from "react";
import "../App.css";
const VotingBar = ({left,right}) => {
  // const { left, right } = props;
  return (
    <div id="votebar">
      <div id="left" style={{ width: `${left}%` }}>{left}%</div>
      <div id="right" style={{ width: `${right}%` }}>{right}%</div>
    </div>
  );
};
export default VotingBar;
