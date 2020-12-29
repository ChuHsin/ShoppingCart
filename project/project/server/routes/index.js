// This file intentionally complex

const session = require('../session');
const orders = require('../orders');
const items = require('../items');

const web = (res) => {
  return ({ message, status, data } = {}) => {
    if (!message && !data) {
      data = 'OK';
    }
    res.status(status || 200).json({ message, data });
  };
};

const routes = {
  session: {},
  orders: {
    one: {},
    all: {},
  },
  items: {
    one: {},
    all: {},
    categories: {},
  },
};

// Session

routes.session.create = (req, res) => {
  const username = req.body.username;
  const sessionInfo = session.attemptCreate(username);
  if (!sessionInfo) {
    web(res)({ status: 403, message: 'Please try another username.' });
    return;
  }
  res.cookie('sid', sessionInfo.sid, { MaxAge: 1000 * 60 });
  web(res)({ data: sessionInfo });
};

routes.session.remove = (req, res) => {
  const sid = req.cookies.sid;
  const validSession = session.validateSession(sid);
  if (!validSession) {
    res.clearCookie('sid');
    web(res)({ status: 401, message: 'No valid session' });
    return;
  }
  res.clearCookie('sid');
  session.remove(sid);
  web(res)();
};

// Orders
routes.orders.all.read = (req, res) => {
  const sid = req.cookies.sid;
  const validSession = session.validateSession(sid);
  if (!validSession) {
    res.clearCookie('sid');
    web(res)({ status: 401, message: 'No valid session' });
    return;
  }
  const username = req.params.username;
  const isAllowed = session.canReadUser({ sid, username });
  if (!isAllowed) {
    web(res)({ status: 403, message: 'Your action is not permitted' });
    return;
  }

  web(res)({ data: orders.readAll(username) });
};

routes.orders.one.add = (req, res) => {
  const sid = req.cookies.sid;
  const validSession = session.validateSession(sid);
  if (!validSession) {
    res.clearCookie('sid');
    web(res)({ status: 401, message: 'No valid session' });
    return;
  }

  const username = req.params.username;
  const isAllowed = session.canReadUser({ sid, username });
  if (!isAllowed) {
    web(res)({ status: 403, message: 'Your action is not permitted' });
    return;
  }

  const item = req.body.item;
  const order = orders.readOrder(username);

  if (!items.readItem(item.itemId)) {
    web(res)({ status: 404, message: 'Item Not Found' });
    return;
  }
  const toAddMount = item.addAmount;
  item.addAmount = orders.calculateAddAmount({ order, item });
  if ((!items.attempAdd(item)) || toAddMount <= 0) {
    web(res)({ status: 403, message: 'Please Input Proper Number' });
    return;
  }
  if (!items.canAdd(item)) { 
    web(res)({ status: 403, message: 'Stock of this Product is not Enough' });
    return;
  }
  item.addAmount = toAddMount;
  const newItem = items.readItem(item.itemId);

  web(res)({ data: orders.addItem({ username, item, newItem }) });
};

routes.orders.all.update = (req, res) => {
  const sid = req.cookies.sid;
  const validSession = session.validateSession(sid);
  if (!validSession) {
    res.clearCookie('sid');
    web(res)({ status: 401, message: 'No valid session' });
    return;
  }
  const username = req.params.username;
  const isAllowed = session.canReadUser({ sid, username });
  if (!isAllowed) {
    web(res)({ status: 403, message: 'Your action is not permitted' });
    return;
  }
  const order = req.body.order;

  web(res)({
    data: orders.placeOrder(username, order)
  });
};

// Items
routes.items.all.read = (req, res) => {
  const sid = req.cookies.sid;
  const validSession = session.validateSession(sid);
  if (!validSession) {
    res.clearCookie('sid');
    web(res)({ status: 401, message: 'No valid session' });
    return;
  }
  web(res)({ data: items.readAll() });
};

routes.items.categories.read = (req, res) => {
  const sid = req.cookies.sid;
  const validSession = session.validateSession(sid);
  if (!validSession) {
    res.clearCookie('sid');
    web(res)({ status: 401, message: 'No valid session' });
    return;
  }
  web(res)({ data: items.readCates() });
};

module.exports = routes;
