import React from "react";


function BotCollection( { filteredBots }) {
  // Your code here

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
        {filteredBots}
      </div>
    </div>
  );
}

export default BotCollection;
