function calculateTotal() {
    const cost = parseFloat(document.getElementById('cost').value) || 0;
    const productType = document.getElementById('productType').value;
    const secondLinkCost = parseFloat(document.getElementById('secondLinkCost').value) || 0;
    const youtubeLinkCost = parseFloat(document.getElementById('youtubeLinkCost').value) || 0;
    const supportingLinkCost = parseFloat(document.getElementById('supportingLinkCost').value) || 0;
    const contentLength = document.getElementById('contentLength').value;
    const contentReview = document.getElementById('contentReview').value;
    const bankFee = parseFloat(document.getElementById('bankFee').value) || 0;

    // Mark-up Price
    let markupPrice = cost > 100 ? cost * 0.30 : 0;
    document.getElementById('markupPrice').value = markupPrice.toFixed(2);

    // Broker Fee
    let brokerFee = 0;
    switch (productType) {
        case 'Guest Post':
            brokerFee = 109;
            break;
        case 'Editorial Link':
            brokerFee = 84;
            break;
        case 'SOC':
            brokerFee = 64;
            break;
        case 'Premium':
            brokerFee = 109;
            break;
    }
    document.getElementById('brokerFee').value = brokerFee.toFixed(2);

    // Second Link Retail
    let secondLinkRetail = secondLinkCost * 1.10;
    document.getElementById('secondLinkRetail').value = secondLinkRetail.toFixed(2);

    // Content Length Fee
    let contentLengthFee = 0;
    if (productType === 'Guest Post') {
        switch (contentLength) {
            case '750': contentLengthFee = 0; break;
            case '1000': contentLengthFee = 15; break;
            case '1500': contentLengthFee = 20; break;
            case '2000': contentLengthFee = 25; break;
        }
    } else if (productType === 'Premium') {
        switch (contentLength) {
            case '750': contentLengthFee = 35; break;
            case '1000': contentLengthFee = 60; break;
            case '1500': contentLengthFee = 110; break;
            case '2000': contentLengthFee = 160; break;
        }
    }
    document.getElementById('contentLengthFee').value = contentLengthFee.toFixed(2);

    // Content Review Fee
    let contentReviewFee = 0;
    if (contentReview === 'With Content Review') {
        contentReviewFee = 18;
    }
    document.getElementById('contentReviewFee').value = contentReviewFee.toFixed(2);

    // YouTube Link Retail
    let youtubeLinkRetail = youtubeLinkCost * 1.10;
    document.getElementById('youtubeLinkRetail').value = youtubeLinkRetail.toFixed(2);

    // Supporting Link Retail
    let supportingLinkRetail = supportingLinkCost * 1.10;
    document.getElementById('supportingLinkRetail').value = supportingLinkRetail.toFixed(2);

    // Stock Images Cost
    updateStockImagesCost();

    // Calculate Discount
    const discountType = document.getElementById('discountType').value;
    const discountValue = parseFloat(document.getElementById('discountValue').value) || 0;
    let discount = 0;
    const totalBeforeDiscount = cost + markupPrice + brokerFee + secondLinkRetail + contentLengthFee + contentReviewFee + youtubeLinkRetail + supportingLinkRetail + bankFee;

    if (discountType === 'percentage') {
        discount = totalBeforeDiscount * (discountValue / 100);
    } else if (discountType === 'amount') {
        discount = discountValue;
    }

    // Final Total
    const orderTotal = totalBeforeDiscount - discount;
    document.getElementById('orderTotal').textContent = `Order Total: $${orderTotal.toFixed(2)}`;
}

// Update Stock Images Cost
function updateStockImagesCost() {
    const stockImages = document.getElementById("stockImages").value;
    let stockImagesCost = 0;

    if (stockImages === "3-4 Images") {
        stockImagesCost = 7;
    }

    document.getElementById("stockImagesCost").value = stockImagesCost.toFixed(2);
}

// Add event listeners
document.getElementById('cost').addEventListener('input', calculateTotal);
document.getElementById('productType').addEventListener('change', calculateTotal);
document.getElementById('secondLinkCost').addEventListener('input', calculateTotal);
document.getElementById('contentLength').addEventListener('change', calculateTotal);
document.getElementById('contentReview').addEventListener('change', calculateTotal);
document.getElementById('youtubeLinkCost').addEventListener('input', calculateTotal);
document.getElementById('supportingLinkCost').addEventListener('input', calculateTotal);
document.getElementById('stockImages').addEventListener('change', calculateTotal);
document.getElementById('bankFee').addEventListener('input', calculateTotal);
document.getElementById('discountType').addEventListener('change', calculateTotal);
document.getElementById('discountValue').addEventListener('input', calculateTotal);
