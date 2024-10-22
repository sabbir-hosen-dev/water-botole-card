
const getCardLs = () => {
  const getItem = JSON.parse(localStorage.getItem("card"));
  if(getItem) {
    return getItem;
  }
  return [];
}


const saveToLs = (card) => {
  const cardStrung = JSON.stringify(card);
  localStorage.setItem("card", cardStrung);
}

const addToLs = (id) => {
  const card = getCardLs();
  card.push(id);

  saveToLs(card);

}


export {getCardLs,addToLs};