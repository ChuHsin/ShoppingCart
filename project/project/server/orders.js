// This file intentionally complex
const items = require('./items');

const orders = {
  "Enoch": [
    {
      itemId: "itemId2008",
      itemName: "The Sample Item 01",
      itemUnitPrice: 9.99,
      itemAmount: 2.1,
      itemUnit: "weight (lb)", // weight or quantity
      itemCount: "lb",
      itemPrice: 21,
    },
    {
      itemId: "itemId2020",
      itemName: "The Sample Item 02",
      itemUnitPrice: 6.99,
      itemAmount: 1,
      itemUnit: "each", // weight or quantity
      itemCount: "",
      itemPrice: 6.99,
    },
  ],
};

const readOrder = (username) => {
  if (!orders[username]) {
    orders[username] = [];
  }
  return orders[username];
};

const readAll = (username) => {
  if (!orders[username]) {
    return [];
  }
  return orders[username];
};

const calculateAddAmount = ({ order, item }) => {
  order.forEach(element => {
    if (element.itemId === item.itemId) {
      item.addAmount = parseFloat(item.addAmount) + parseFloat(element.itemAmount);
    }
  });
  return item.addAmount;
};

const addItem = ({ username, item, newItem }) => {
  item.addAmount = parseFloat(item.addAmount).toFixed(2);
  const newPrice = (item.addAmount * newItem.itemUnitPrice).toFixed(2);

  orders[username].push({
    itemId: newItem.itemId,
    itemName: newItem.itemName,
    itemUnitPrice: newItem.itemUnitPrice,
    itemAmount: item.addAmount,
    itemUnit: newItem.itemUnit, // weight or quantity
    itemCount: "",
    itemPrice: newPrice,
  })
  return orders[username];
};

const placeOrder = (username, order) => {
  order.forEach(element => {
    items.updateItem(element.itemId, element.itemAmount)
  })
  orders[username] = [];
  return orders[username];
};

module.exports = {
  addItem,
  readOrder,
  placeOrder,
  readAll,
  calculateAddAmount,
};
