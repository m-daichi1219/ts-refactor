const price = (order) => {
  // 価格 = 基本価格 - 数量割引 + 配送料
  // price = base price - quantity discount + shipping
  return (
    order.quantity * order.itemPrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100)
  );
};

const refPrice = (order) => {
  // 価格 = 基本価格 - 数量割引 + 配送料
  // price = base price - quantity discount + shipping
  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscount =
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(basePrice * 0.1, 100);

  return basePrice - quantityDiscount + shipping;
};
