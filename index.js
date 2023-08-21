




// // Declare a function called summerShoppoing
// function summerShopping(target) {
//     /// add the value of added button
//     const addedItems = document.getElementById('added-items');
//     const itemName = target.querySelector('.item-name').innerText;
//     const itemPricestring = target.querySelector('.price').innerText;
//     const itemPrice = parseFloat(itemPricestring);

//     const itemDesc = itemName + ' : ' + itemPrice.toFixed(2) + " Tk";
//     const p = document.createElement('p');
//     // Set the value into new tag
//     p.innerText = itemDesc;
//     addedItems.appendChild(p);

//     const TotalPriceElement = document.getElementById('total-price');
//     const totalPriceString = TotalPriceElement.innerText;
//     const totalPrice = parseFloat(totalPriceString);
//     const newTotalPrice = totalPrice + itemPrice;
//     TotalPriceElement.innerText = newTotalPrice.toFixed(2) + " Tk";



//     // apply conditions to get the accurate output

//     // condition for apply button
//     const applyCouponBtn = document.getElementById('apply-coupon-btn');
    
//     if (newTotalPrice >= 200) {
//         applyCouponBtn.removeAttribute('disabled');
//     } else {
//         applyCouponBtn.setAttribute('disabled', true);
//     }

//     // condition for make purchase button
//     const makePurchaseBtn = document.getElementById('make-purchase-btn');
//     if (newTotalPrice > 0) {
//         makePurchaseBtn.removeAttribute('disabled');
        
//     } else {
//         makePurchaseBtn.setAttribute('disabled', true);
//     }

    
//     const couponField = document.getElementById('coupon-field');
//     const coupon= couponField.value.toUpperCase();
//     const discountElement = document.getElementById('discount');
//     const totalElement = document.getElementById('total');


//     // || coupon === 'SELL200'
//     if(newTotalPrice >= 200  ){
//         if (coupon == 'SELL200' ) {
//             const discount = newTotalPrice * 0.20;
//             discountElement.innerText = discount.toFixed(2);
//             const totalExpenses = newTotalPrice - discount;

//             totalElement.innerText = totalExpenses.toFixed(2);
            
//             }


//         }
//     else{
//             discountElement.innerText='0.00';
//             totalElement.innerText=newTotalPrice.toFixed(2) ;
    
//     }
    

    

    

//     // console.log(itemName);
//     // console.log(itemPrice);
// }


// Declare a function called summerShoppoing
function summerShopping(target) {
    /// add the value of added button
    const addedItems = document.getElementById('added-items');
    const itemName = target.querySelector('.item-name').innerText;
    const itemPricestring = target.querySelector('.price').innerText;
    const itemPrice = parseFloat(itemPricestring);

    const itemDesc = itemName + ' : ' + itemPrice.toFixed(2) + " Tk";
    const p = document.createElement('p');
    // Set the value into new tag
    p.innerText = itemDesc;
    addedItems.appendChild(p);

    const TotalPriceElement = document.getElementById('total-price');
    const totalPriceString = TotalPriceElement.innerText;
    const totalPrice = parseFloat(totalPriceString);
    const newTotalPrice = totalPrice + itemPrice;
    TotalPriceElement.innerText = newTotalPrice.toFixed(2) + " Tk";



    // apply conditions to get the accurate output

    // condition for apply button
    const applyCouponBtn = document.getElementById('apply-coupon-btn');
    
    if (newTotalPrice >= 200) {
        applyCouponBtn.removeAttribute('disabled');
    } else {
        applyCouponBtn.setAttribute('disabled', true);
    }

    // condition for make purchase button
    const makePurchaseBtn = document.getElementById('make-purchase-btn');
    if (newTotalPrice > 0) {
        makePurchaseBtn.removeAttribute('disabled');
        console.log('worked');
    } else {
        makePurchaseBtn.setAttribute('disabled', true);
    }

    
    const couponField = document.getElementById('coupon-field');
    const coupon= couponField.value.toUpperCase();
    const discountElement = document.getElementById('discount');
    const totalElement = document.getElementById('total');


    // || coupon === 'SELL200'
    if(newTotalPrice >= 200  ){
        if (coupon == 'SELL200' ) {
            const discount = newTotalPrice * 0.20;
            discountElement.innerText = discount.toFixed(2);
            
            const totalExpenses = newTotalPrice - discount;

            totalElement.innerText = totalExpenses.toFixed(2);
            console.log('also worked');
            }


            
        }
    

        discountElement.innerText='0.00';
        totalElement.innerText=newTotalPrice.toFixed(2);

    

    // console.log(itemName);
    // console.log(itemPrice);
}

