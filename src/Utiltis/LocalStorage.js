
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


const removeToLs = (id) => {
  const localStoreItem = getCardLs();
  const deletItem = localStoreItem.filter(item => item !== id);
  saveToLs(deletItem)
}


export {getCardLs,addToLs,removeToLs};