






function summerShopping(target) {
    const addedItems = document.getElementById('added-items');
    const itemName = target.querySelector('.item-name').innerText;
    const itemPricestring = target.querySelector('.price').innerText;
    const itemPrice = parseFloat(itemPricestring);

    const itemDesc = itemName + ' : ' + itemPrice.toFixed(2) + " Tk";
    const p = document.createElement('p');
    p.innerText = itemDesc;
    addedItems.appendChild(p);
    
    const TotalPriceElement = document.getElementById('total-price');
    const totalPriceString = TotalPriceElement.innerText;
    const totalPrice = parseFloat(totalPriceString);
    const newTotalPrice = totalPrice + itemPrice;
    TotalPriceElement.innerText = newTotalPrice.toFixed(2) ;
    const totalElement = document.getElementById('total');
    totalElement.innerText=newTotalPrice.toFixed(2) ;
    // Apply conditions to get the accurate output
    const applyCouponBtn = document.getElementById('apply-coupon-btn');
    
    if (newTotalPrice >= 200) {
        applyCouponBtn.removeAttribute('disabled');
    } else {
        applyCouponBtn.setAttribute('disabled', true);
    }
    
    // Condition for make purchase button
    const makePurchaseBtn = document.getElementById('make-purchase-btn');
    if (newTotalPrice > 0) {
        makePurchaseBtn.removeAttribute('disabled');
        
    } else {
        makePurchaseBtn.setAttribute('disabled', true);
    }

    // Apply button event listener
    // const applyCouponBtn = document.getElementById('apply-coupon-btn');
    applyCouponBtn.addEventListener('click', function () {
        const couponField = document.getElementById('coupon-field');
        const coupon = couponField.value.toUpperCase();
        const discountElement = document.getElementById('discount');
        const totalElement = document.getElementById('total');

        if (newTotalPrice >= 200 ) {
            if(coupon === 'SELL200'){

                const discount =parseFloat(newTotalPrice * 0.20);
                discountElement.innerText = discount.toFixed(2);
                const totalExpenses = newTotalPrice - discount;
                totalElement.innerText = totalExpenses.toFixed(2);
            }
            else{
                alert('Accurate coupon code has not been applied. Please pay the full bill. You are not eligible for the discount')
                discountElement.innerText = '0.00';
                totalElement.innerText = newTotalPrice.toFixed(2);
            }
        } else {
            discountElement.innerText = '0.00';
            totalElement.innerText = newTotalPrice.toFixed(2);
        }
    });
    
    document.getElementById('go-home').addEventListener('click', goHome())
    
    function goHome(){
        window.reload();
        console.log('go home');
    }
    
    
}


