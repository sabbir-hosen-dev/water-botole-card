import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import "./Card.css";
import { addToLs, getCardLs } from "../../Utiltis/LocalStorage";
import SelectCard from "../SelectCard/SelectCard";


function Cards() {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch("Data/botoles.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

    


  const [card,setCard] = useState([]);


  const cardAdd = (item) => {
    setCard([...card,item]);
    addToLs(item.id)
  }



  useEffect(() => {
    if(data.length > 0){
      const lCardData = getCardLs();
     
      const saveCard = [];
      for(const id of lCardData){
        const findCard = data.find( item =>  item.id === id);
        if(findCard){
          saveCard.push(findCard);
        }
      }
      setCard(saveCard)
    }
   },[data])


  return (
    <div className="">
      <h2>Total Bottols : {data.length}</h2>
      <p>card: {card.length}</p>
      <div className="" style={{display: "flex", gap: "5px", justifyContent: "center", margin: "20px 0px", flexWrap: " wrap"}}>
      {          card && card.map((card ,index)=> <SelectCard key={index} card={card}/>  )
         }
      </div>
      <div className="card-container">
        {data && data.map((item) => <Card key={item.id} item={item} cardAdd={cardAdd}  />)}
      </div>
    </div>
  );
}

export default Cards;
