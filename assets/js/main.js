// Il programma dovrà consentire di calcolare il prezzo del panino selezionando
// o deselezionando gli ingredienti proposti.


// Nested array with ingredients and prices
var ingredients = [
    ["cheese", '2.5'],
    ["egg", '2'],
    ['mustard', '0.5'],
    ['tomato', '1'],
    ['lettuce', '1'],
    ['ketchup', '0.5']
]

// Inserts a form group inside the HTML
function renderIngredients(list, el) {
    var counter = 0;
    while (counter < list.length) {
        el.insertAdjacentHTML('beforeend', `
        <div class="form-group">
        <img src="./assets/img/${list[counter][0]}.svg"
            <label for="${list[counter][0]}">${list[counter][0].charAt(0).toUpperCase() + list[counter][0].slice(1)}</label>
            <input type="checkbox" name="${list[counter][0]}" id="${list[counter][0]} " data-price="${list[counter][1]} ">
            <span>add</span>
        </div >
        `)
        counter++
    }
};

var ingredientsEl = document.querySelector('.ingredients');
renderIngredients(ingredients, ingredientsEl)

// Generates price when clicked
document.querySelector('button').addEventListener('click', function () {
    // Checks that a burger name has been inserted
    var burgerName = document.getElementById('burger_name').value;
    if (burgerName === "") {
        alert('Please name your burger')
    } else {
        // Standard price of the hamburger
        var basePrice = 8.5;
        // Increase the base price for each clicked checkbox
        var checks = document.querySelectorAll('input[type="checkbox"]')
        var sumIngredients = null;
        for (var i = 0; i < checks.length; i++) {
            var element = checks[i];
            if (element.checked) {
                sumIngredients += Number(element.getAttribute('data-price'));
            }
        }
        var finalPrice = basePrice + sumIngredients;
        // Checks if there s a discount and applies it
        var listCoupon = ["abc", 'cde', '123', 'riccardo']
        var userCoupon = document.getElementById('discount').value;
        if (listCoupon.includes(userCoupon)) {
            finalPrice -= finalPrice * 0.2;
        }
        document.getElementById('price').innerHTML = '$ ' + finalPrice
    }

});