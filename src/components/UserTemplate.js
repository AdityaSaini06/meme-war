// import React, { usestate } from "react";
import "../App.css";
const UserTemplate = (props) => {
  // const { color } = props;
  //  const[progress,setProgress]=usestate(0);

  // const handleClick=(shift)=>{
  //          const newprog= shift==='left'? progress-10:progress+10;
  //          setProgress(Math.max(0,Math.min(100,newprog)));
  //          document.documentElement.style.setProperty('--left-width',`${newprog}%`)
  // }
  return (
    <div id="user0">
      <div id="usermeme">
        <img src="" alt="usermemeimg" />
      </div>
      <h3 id="usertagline">Meme Tagline</h3>
      {/* <button
        className="uservotingbutton"
        style={{ backgroundColor: `${color}` }}
      //  onClick={()=>handleClick('left')}
      >
        Vote
      </button> */}
    </div>
  );
};

export default UserTemplate;
