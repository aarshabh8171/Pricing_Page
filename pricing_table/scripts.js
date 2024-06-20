// function changeCurrency(button) {
//     // Find the price element within the same plan
//     var priceElement = button.parentElement.querySelector('.price');
    
//     // Retrieve data attributes
//     var rupeesPrice = priceElement.getAttribute('data-price-rupees');
//     var usdPrice = priceElement.getAttribute('data-price-usd');
//     var euroPrice = priceElement.getAttribute('data-price-euro');
    
//     // Toggle between different currencies
//     if (priceElement.textContent === rupeesPrice) {
//         priceElement.textContent = usdPrice;
//     } else if (priceElement.textContent === usdPrice) {
//         priceElement.textContent = euroPrice;
//     } else {
//         priceElement.textContent = rupeesPrice;
//     }
// }


function changeCurrency(selectedCurrency) {
    // Get all price elements
    var priceElements = document.querySelectorAll('.price');
    
    // Iterate over each price element and update the currency
    priceElements.forEach(function(priceElement) {
        var rupeesPrice = priceElement.getAttribute('data-price-rupees');
        var usdPrice = priceElement.getAttribute('data-price-usd');
        var euroPrice = priceElement.getAttribute('data-price-euro');
        
        if (selectedCurrency === 'rupees') {
            priceElement.textContent = rupeesPrice;
        } else if (selectedCurrency === 'usd') {
            priceElement.textContent = usdPrice;
        } else if (selectedCurrency === 'euro') {
            priceElement.textContent = euroPrice;
        }
    });
}
