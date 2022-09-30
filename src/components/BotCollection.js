import React from "react";
import BotCard from "./BotCard";

function BotCollection( { bots }) {
  // Your code here

  const botsList = bots.map((bot) => {
    return <BotCard key={bot.id} bot={bot} /> 
  })

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
        {botsList}
      </div>
    </div>
  );
}

export default BotCollection;
