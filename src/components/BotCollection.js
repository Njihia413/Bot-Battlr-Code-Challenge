import React, { useState, useEffect} from "react";
import BotCard from "./BotCard";

function BotCollection() {
  // Your code here
  const botsUrl = " http://localhost:8002/bots";
  const[botsInfo, setBotsInfo] = useState([]);

  //Fetch Bots
  useEffect(()=> {
    fetch(`${botsUrl}`)
    .then(response => response.json())
    .then(bots => {
      const botsList = bots.map((bot) => <BotCard key={bot.id} bot={bot}/>)
      setBotsInfo(botsList)
    });
  }, [])


  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
        {botsInfo}
      </div>
    </div>
  );
}

export default BotCollection;
