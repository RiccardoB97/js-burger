// Il programma dovrà consentire di calcolare il prezzo del panino selezionando
// o deselezionando gli ingredienti proposti.


// Nested array with ingredients and prices
var ingredients = [
    ["cheese", '2.5'],
    ["eggs", '2'],
    ['mustard', '0.5'],
    ['tomato', '1'],
    ['lettuce', '1'],
    ['ketchup', '0.5']
]


function renderIngredients(list) {
    var counter = 0;
    while (counter < list.length) {
        document.querySelector('.ingredients').insertAdjacentHTML('beforeend', `
        <img src="./assets/img/${counter[0]}.svg"
        <div class="form-group">
            <label for="${counter[0]}">${counter[0]}</label>
            <input type="checkbox" name="${counter[0]}" id="${counter[0]}" data-price="${counter[1]}">
        </div>
        `)
        counter++
        console.log(counter[0]);
    }

}

renderIngredients(ingredients)
