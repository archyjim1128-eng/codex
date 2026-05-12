const { MENU } = require('../../utils/menu');
const { submitOrder } = require('../../utils/order-service');

Page({
  data: {
    orderer: '',
    diningDate: '',
    timeSlots: ['早餐', '午餐', '晚餐', '夜宵'],
    timeSlotIndex: 2,
    menu: MENU,
    selectedDishIds: [],
  },

  onLoad() {
    this.setData({ diningDate: this.getToday() });
  },

  getToday() {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, '0');
    const day = `${now.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
  },

  onOrdererInput(e) {
    this.setData({ orderer: e.detail.value.trim() });
  },

  onDiningDateChange(e) {
    this.setData({ diningDate: e.detail.value });
  },

  onTimeSlotChange(e) {
    this.setData({ timeSlotIndex: Number(e.detail.value) });
  },

  onDishChange(e) {
    this.setData({ selectedDishIds: e.detail.value });
  },

  onSubmit() {
    const { orderer, diningDate, timeSlots, timeSlotIndex, selectedDishIds, menu } = this.data;

    if (!orderer) {
      wx.showToast({ title: '请先填写点餐人', icon: 'none' });
      return;
    }

    if (!selectedDishIds.length) {
      wx.showToast({ title: '请至少选择一个菜品', icon: 'none' });
      return;
    }

    const selectedDishes = menu.filter((dish) => selectedDishIds.includes(dish.id));

    submitOrder({
      orderer,
      diningDate,
      timeSlot: timeSlots[timeSlotIndex],
      dishes: selectedDishes,
    });

    wx.showToast({ title: '提交成功', icon: 'success' });
    this.setData({ selectedDishIds: [] });
  },
});
