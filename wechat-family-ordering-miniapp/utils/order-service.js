const ORDER_STORAGE_KEY = 'family_orders_v1';

function readOrders() {
  return wx.getStorageSync(ORDER_STORAGE_KEY) || [];
}

function writeOrders(orders) {
  wx.setStorageSync(ORDER_STORAGE_KEY, orders);
}

function submitOrder(orderPayload) {
  const orders = readOrders();
  const nextOrder = {
    id: `order_${Date.now()}`,
    createdAt: Date.now(),
    ...orderPayload,
  };

  orders.push(nextOrder);
  writeOrders(orders);
  return nextOrder;
}

function listOrdersByDate(diningDate) {
  const orders = readOrders();
  return orders.filter((item) => item.diningDate === diningDate);
}

function clearOrders() {
  writeOrders([]);
}

module.exports = {
  submitOrder,
  listOrdersByDate,
  clearOrders,
};
