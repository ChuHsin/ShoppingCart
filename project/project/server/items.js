// This file intentionally complex
const items = require('./itemsLib').items;

const categories = require('./categoriesLib').categories;

const readItem = ( itemId ) => {
  if (!items[itemId]) {
    return {};
  }
  return items[itemId];
};

const readAll = () => {
  return items;
};

const readCates = () => {
  return categories;
}

const updateItem = (itemId, itemAmount) => {
  if (!itemId) {
    return;
  }
  items[itemId].itemStock -= itemAmount;
  items[itemId].itemStock = items[itemId].itemStock.toFixed(2);
    return;
};

const attempAdd = (item) => {
  const itemId = item.itemId;
  item.addAmount = item.addAmount * 1;
  if(item.addAmount <= 0) {
    return false;
  }
  if(items[itemId].itemUnit === "weight (lb)"){
    if(isNaN(item.addAmount)){
      return false;
    }
  }
  if(items[itemId].itemUnit === "number"){
    if(!Number.isInteger(item.addAmount)){

      return false;
    }
  }
return true;
}

const canAdd = (item) => {
  const itemId = item.itemId;
  if(items[itemId] && !items[itemId].outOfStock) {
    const amount = item.addAmount;
    if(items[itemId].itemStock - amount >= 0){
      return true;
    }
  }
return false;
}

const readItemUnit = ( itemId ) => {
  return items[itemId].itemUnit;
};

module.exports = {
  readItem,
  updateItem,
  readAll,
  readCates,
  canAdd,
  attempAdd,
  readItemUnit,
};

