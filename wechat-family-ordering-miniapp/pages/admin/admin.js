const { listOrdersByDate } = require('../../utils/order-service');

// TODO: 后续可根据 openid/昵称鉴权，仅允许主账号访问。
const MAIN_ACCOUNT = 'family-owner';

Page({
  data: {
    mainAccount: MAIN_ACCOUNT,
    diningDate: '',
    dishSummary: [],
  },

  onLoad() {
    this.setData({ diningDate: this.getToday() });
    this.reloadData();
  },

  getToday() {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, '0');
    const day = `${now.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
  },

  onDiningDateChange(e) {
    this.setData({ diningDate: e.detail.value }, () => {
      this.reloadData();
    });
  },

  reloadData() {
    const { diningDate } = this.data;
    const orders = listOrdersByDate(diningDate);

    const dishMap = new Map();
    orders.forEach((order) => {
      order.dishes.forEach((dish) => {
        if (!dishMap.has(dish.id)) {
          dishMap.set(dish.id, {
            dishId: dish.id,
            name: dish.name,
            recipe: dish.recipe,
            count: 0,
            orderers: [],
          });
        }

        const current = dishMap.get(dish.id);
        current.count += 1;
        current.orderers.push(`${order.orderer}(${order.timeSlot})`);
      });
    });

    const dishSummary = Array.from(dishMap.values()).map((item) => ({
      ...item,
      orderersText: item.orderers.join('、'),
    }));

    this.setData({ dishSummary });
  },
});
