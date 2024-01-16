// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import "./components/VotingBar";
import VotingBar from "./components/VotingBar";
import UserTemplate from "./components/UserTemplate";


function App() {
  const [progress1, setProgress1] = useState(50);
  const[progress2,setProgress2]=useState(50)
  const handleClick=(shift)=>{
     if(shift==='left'){
       if(progress1===100||progress2===100){
        return}
        const update1= progress1+5;
        const update2 =progress2-5;
        setProgress1(update1)
        setProgress2(update2)        
    }
     else if(shift==='right'){
      if(progress1===100||progress2===100){
        return}
        const update1= progress1-5;
        const update2 =progress2+5;
        setProgress1(update1)
        setProgress2(update2)        
   
     }
    }
  return (
    <div className="bgimg">
      <div id="header">
        <div id="user">
          <img id="users" src="./pfp.PNG" alt="user1img" />
          <br />
          <span>USER1</span>
        </div>
        <div id="middleBar">
          <VotingBar left={progress1} right={progress2} />
          <h4>Topic</h4>
          <h1>Cats</h1>
        </div>
        <div id="user">
          <img id="users" src="./pfp.PNG" alt="user2img" />
          <br />
          <span>USER 2</span>
        </div>
      </div>
      <div id="main1">
        <div className="user_1">
          <UserTemplate />
          <button
            className="uservotingbutton"
            style={{ backgroundColor: "blue" }}
            onClick={() => handleClick("left")}
          >
            Vote
          </button>
        </div>

        <div id="divider"></div>
        <div className="user_2">
          <UserTemplate />
          <button
            className="uservotingbutton"
            style={{ backgroundColor: "red" }}
            onClick={() => handleClick("right")}
          >
            Vote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
