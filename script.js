const row=document.querySelector('#row');
const submit=document.querySelector('#submit');
const searchField=document.querySelector('#searchField');
const container=document.querySelector('.container');
const reset=document.querySelector('#reset');

// function handleSubmit (data){
//     data.meals.forEach(meal => {
//         const div=document.createElement("div");
//         div.classList.add('col-4');
//         div.innerHTML=`
//         <div class="card" id="${meal.id}">
//             <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
//             <div class="card-body">
//                 <h5 class="card-title">${meal.strMeal}</h5>
//                 <p class="card-text">${meal.strInstructions.slice(0,100)}...</p>
//                 <a href="meal.html?id=${meal.idMeal}" class="btn btn-primary">Read more.</a>
//             </div>
//         </div>
//         `
//         row.appendChild(div);
//     })
// }

fetch(`https://www.themealdb.com/api/json/v2/1/randomselection.php`)
    .then(res => res.json())
    .then(data => {
        data.meals.forEach(meal => {
            const div=document.createElement("div");
            div.classList.add('col-4');
            div.innerHTML=`
        <div class="card" id="${meal.id}">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,100)}...</p>
                <a href="meal.html?id=${meal.idMeal}" class="btn btn-primary">Read more.</a>
            </div>
        </div>
        `
            row.appendChild(div);
        })
    })

submit.addEventListener('click',() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchField.value}`)
        .then(res => res.json())
        .then(data => {
            data.meals.forEach(meal => {
                container.innerHTML=`
        <div class="only-card" id="${meal.id}">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
            <div class="card-bodyonly">
                <h3 class="card-title">${meal.strMeal}</h3>
                <h4>Ingredients:</h4>
                <div class="ul">
                <ul>
                    <li > ${meal.strIngredient1}</li>
                    <li > ${meal.strIngredient2}</li>
                    <li > ${meal.strIngredient3}</li>
                    <li > ${meal.strIngredient4}</li>
                    <li > ${meal.strIngredient5}</li>
                    <li > ${meal.strIngredient6}</li>
                    <li > ${meal.strIngredient7}</li>
                    <li > ${meal.strIngredient8}</li>
                    <li > ${meal.strIngredient9}</li>
                    <li > ${meal.strIngredient10}</li>
                    <li > ${meal.strIngredient11}</li>
                    <li > ${meal.strIngredient12}</li>
                    <li > ${meal.strIngredient13}</li>
                    <li > ${meal.strIngredient14}</li>
                    <li > ${meal.strIngredient15}</li>
                    <li > ${meal.strIngredient16}</li>
                    <li > ${meal.strIngredient17}</li>
                    <li > ${meal.strIngredient18}</li>
                    <li > ${meal.strIngredient19}</li>
                    <li > ${meal.strIngredient20}</li>
                    </ul>
                    <ul>
                    <li > ${meal.strMeasure1}</li>
                    <li > ${meal.strMeasure2}</li>
                    <li > ${meal.strMeasure3}</li>
                    <li > ${meal.strMeasure4}</li>
                    <li > ${meal.strMeasure5}</li>
                    <li > ${meal.strMeasure6}</li>
                    <li > ${meal.strMeasure7}</li>
                    <li > ${meal.strMeasure8}</li>
                    <li > ${meal.strMeasure9}</li>
                    <li > ${meal.strMeasure10}</li>
                    <li > ${meal.strMeasure11}</li>
                    <li > ${meal.strMeasure12}</li>
                    <li > ${meal.strMeasure13}</li>
                    <li > ${meal.strMeasure14}</li>
                    <li > ${meal.strMeasure15}</li>
                    <li > ${meal.strMeasure16}</li>
                    <li > ${meal.strMeasure17}</li>
                    <li > ${meal.strMeasure18}</li>
                    <li > ${meal.strMeasure19}</li>
                    <li > ${meal.strMeasure20}</li>
                    </ul>
                </div>
                    
                    <h4>Instructions:</h4>
                    <p class="card-text">${meal.strInstructions}</p>
            </div>
        </div>
        `
                row.appendChild(div);
            })
        })


});

reset.addEventListener('click',() => {
    location.reload();
});
