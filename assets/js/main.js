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


function renderIngredients(list, el) {
    var counter = 0;
    while (counter < list.length) {
        el.insertAdjacentHTML('beforeend', `
        <img src="./assets/img/${list[counter][0]}.svg"
        <div class="form-group">
            <label for="${list[counter][0]}">${list[counter][0]}</label>
            <input type="checkbox" name="${list[counter][0]}" id="${list[counter][0]} " data-price="${list[counter][1]} ">
        </div >
        `)
        counter++
        console.log(counter[0]);
    }
}

var ingredientsEl = document.querySelector('.ingredients');
renderIngredients(ingredients, ingredientsEl)
