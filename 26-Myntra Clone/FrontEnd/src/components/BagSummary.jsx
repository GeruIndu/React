const BagSummary = () => {
  const summary = {
    totalItem: 29,
    totalDiscount: 999,
    totalMRP: 2499,
    finalPayment: 1599,
  };

  return (
    <div class="bag-summary">
      <div class="bag-details-container">
        <div class="price-header">
          PRICE DETAILS ({summary.totalItem} Items){" "}
        </div>
        <div class="price-item">
          <span class="price-item-tag">Total MRP</span>
          <span class="price-item-value">₹{summary.totalMRP}</span>
        </div>
        <div class="price-item">
          <span class="price-item-tag">Discount on MRP</span>
          <span class="price-item-value priceDetail-base-discount">
            -₹{summary.totalDiscount}
          </span>
        </div>
        <div class="price-item">
          <span class="price-item-tag">Convenience Fee</span>
          <span class="price-item-value">₹99</span>
        </div>
        <hr />
        <div class="price-footer">
          <span class="price-item-tag">Total Amount</span>
          <span class="price-item-value">₹{summary.finalPayment}</span>
        </div>
      </div>
      <button class="btn-place-order">
        <div class="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
