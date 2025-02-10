const priceOrder = (product, quantity, shippingMethod) => {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  const shippingCost = quantity * shippingPerCase;
  const price = basePrice - discount + shippingCost;
  return price;
};

/** ---- */

const applyShipping = (basePrice, shippingMethod, quantity, discount) => {
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  const shippingCost = quantity * shippingPerCase;
  const price = basePrice - discount + shippingCost;

  return price;
};

const priceOrder2 = (product, quantity, shippingMethod) => {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;
  //   const shippingPerCase =
  //     basePrice > shippingMethod.discountThreshold
  //       ? shippingMethod.discountedFee
  //       : shippingMethod.feePerCase;
  //   const shippingCost = quantity * shippingPerCase;
  //   const price = basePrice - discount + shippingCost;
  const price = applyShipping(basePrice, shippingMethod, quantity, discount);
  return price;
};

/** ---- */

const applyShipping2 = (
  priceData,
  basePrice,
  shippingMethod,
  quantity,
  discount,
) => {
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  const shippingCost = quantity * shippingPerCase;
  const price = basePrice - discount + shippingCost;

  return price;
};

const priceOrder3 = (product, quantity, shippingMethod) => {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;
  //   const shippingPerCase =
  //     basePrice > shippingMethod.discountThreshold
  //       ? shippingMethod.discountedFee
  //       : shippingMethod.feePerCase;
  //   const shippingCost = quantity * shippingPerCase;
  //   const price = basePrice - discount + shippingCost;
  const priceData = {};
  const price = applyShipping(
    priceData,
    basePrice,
    shippingMethod,
    quantity,
    discount,
  );
  return price;
};

/** ---- */

const applyShipping3 = (
  priceData,
  //   basePrice,
  shippingMethod,
  quantity,
  discount,
) => {
  const shippingPerCase =
    priceData.basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  const shippingCost = quantity * shippingPerCase;
  const price = priceData.basePrice - discount + shippingCost;

  return price;
};

const priceOrder4 = (product, quantity, shippingMethod) => {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;
  //   const shippingPerCase =
  //     basePrice > shippingMethod.discountThreshold
  //       ? shippingMethod.discountedFee
  //       : shippingMethod.feePerCase;
  //   const shippingCost = quantity * shippingPerCase;
  //   const price = basePrice - discount + shippingCost;
  const priceData = { basePrice: basePrice };
  const price = applyShipping(
    priceData,
    // basePrice,
    shippingMethod,
    quantity,
    discount,
  );
  return price;
};

/** ---- */

const applyShipping4 = (
  priceData,
  //   basePrice,
  shippingMethod,
  //   quantity,
  discount,
) => {
  const shippingPerCase =
    priceData.basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  const shippingCost = priceData.quantity * shippingPerCase;
  const price = priceData.basePrice - discount + shippingCost;

  return price;
};

const priceOrder5 = (product, quantity, shippingMethod) => {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;
  //   const shippingPerCase =
  //     basePrice > shippingMethod.discountThreshold
  //       ? shippingMethod.discountedFee
  //       : shippingMethod.feePerCase;
  //   const shippingCost = quantity * shippingPerCase;
  //   const price = basePrice - discount + shippingCost;
  const priceData = { basePrice: basePrice, quantity: quantity };
  const price = applyShipping(
    priceData,
    // basePrice,
    shippingMethod,
    // quantity,
    discount,
  );
  return price;
};

/** ---- */

const applyShipping5 = (
  priceData,
  //   basePrice,
  shippingMethod,
  //   quantity,
  //   discount,
) => {
  const shippingPerCase =
    priceData.basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  const shippingCost = priceData.quantity * shippingPerCase;
  const price = priceData.basePrice - priceData.discount + shippingCost;

  return price;
};

const priceOrder6 = (product, quantity, shippingMethod) => {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;
  //   const shippingPerCase =
  //     basePrice > shippingMethod.discountThreshold
  //       ? shippingMethod.discountedFee
  //       : shippingMethod.feePerCase;
  //   const shippingCost = quantity * shippingPerCase;
  //   const price = basePrice - discount + shippingCost;
  const priceData = {
    basePrice: basePrice,
    quantity: quantity,
    discount: discount,
  };
  const price = applyShipping(
    priceData,
    // basePrice,
    shippingMethod,
    // quantity,
    // discount,
  );
  return price;
};

/** ---- */

const calculatePricingData = (product, quantity) => {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;

  return { basePrice: basePrice, quantity: quantity, discount: discount };
};

const applyShipping6 = (priceData, shippingMethod) => {
  const shippingPerCase =
    priceData.basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  const shippingCost = priceData.quantity * shippingPerCase;
  const price = priceData.basePrice - priceData.discount + shippingCost;

  return price;
};

const priceOrder7 = (product, quantity, shippingMethod) => {
  const priceData = calculatePricingData(product, quantity);

  const price = applyShipping(priceData, shippingMethod);
  return price;
};

/** ---- */

const refCalculatePricingData = (product, quantity) => {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;

  return { basePrice: basePrice, quantity: quantity, discount: discount };
};

const refApplyShipping = (priceData, shippingMethod) => {
  const shippingPerCase =
    priceData.basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  const shippingCost = priceData.quantity * shippingPerCase;
  return priceData.basePrice - priceData.discount + shippingCost;
};

const refPriceOrder = (product, quantity, shippingMethod) => {
  const priceData = calculatePricingData(product, quantity);

  return applyShipping(priceData, shippingMethod);
};
