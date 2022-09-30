import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const botsUrl = " http://localhost:8002/bots";
  const[bots, setBots] = useState([]);

  //Fetch Bots
  useEffect(()=> {
    fetch(`${botsUrl}`)
    .then(response => response.json())
    .then(data => setBots(data));
  }, [])

  return (
    <div>
      <YourBotArmy />
      <BotCollection bots={bots} />
    </div>
  )
}

export default BotsPage;
