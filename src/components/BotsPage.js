import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotCard from "./BotCard";

function BotsPage() {
  //start here with your code for step one
  const botsUrl = " http://localhost:8002/bots";
  const[bots, setBots] = useState([]);
  const[botsListed, setBotsListed] = useState([]);

  //Fetch Bots
  useEffect(()=> {
    fetch(`${botsUrl}`)
    .then(response => response.json())
    .then(data => setBots(data));
  }, [])

  //Check if a bot is already listed
  function alreadyListedBot(bot) {
    return Boolean(botsListed.find(botListed => botListed.id === bot.id))
  }


  //Delete bot from server
  function deleteBot(botToDelete){
    fetch(`${botsUrl}/${botToDelete.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(() => {
      setBots(bots.filter(currentBot => currentBot.id !== botToDelete.id))
      setBotsListed(botsListed.filter(botListed => botListed.id !== botToDelete.id))
    })
  }

  //Handler for Bot Actions
  function handleBotActionClick(bot, action){
    switch(action){
      case "release-bot":
        deleteBot(bot)   
        break;
             
      case "toggle-listing":
        if(!alreadyListedBot(bot)){
          setBotsListed([...botsListed, bot])
        }else {
          setBotsListed(botsListed.filter(botListed => botListed.id !== bot.id))
        }
        break;

    }
  }

  

  function botsList (botsArray) {
    return botsArray.map(bot => <BotCard key={bot.id} bot={bot} handleBotActionClick={handleBotActionClick}/> )
  }

  return (
    <div>
      <YourBotArmy botsListed={botsList(botsListed)} />
      <BotCollection bots={botsList(bots)} />
    </div>
  )
}

export default BotsPage;
