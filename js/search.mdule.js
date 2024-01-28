 
 
 
     let searchl =document.getElementById("searchl").value
 
 export class Search {

 constructor(){

console.log(searchl);
    
 }
async searchByFLetter(term) {
    closeSideNav()
    
    
    term == "" ? term = "a" : "";
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${term}`)
    response = await response.json()

    response.meals ? displayMeals(response.meals) : displayMeals([])

}











 }