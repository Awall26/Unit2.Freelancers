//starting freelancer array at least 2 objects [{name: , occupation: price:}]
const freelancers = [
    {Name: "Bob", Occupation: "Artist", Price: "1,000"},
    {Name: "Harry", Occupation: "Plumber", Price: "500"},
    {Name: "Jerry", Occupation: "Architect", Price: "2,000"}
]

//array of names
const Names = [
    {Name: "John"},
    {Name: "Larry"},
    {Name: "Jennifer"},
    {Name: "Dan"},
    {Name: "Kendall"},
    {Name: "Michelle"},
    {Name: "Sam"}
]

//array of occupations
const Occupations = [
    {Occupation: "Researcher"},
    {Occupation: "Carpenter"},
    {Occupation: "Hair Stylist"},
    {Occupation: "Dental Hygenist"},
    {Occupation: "Software Engineer"},
    {Occupation: "Producer"},
    {Occupation: "Electrician"}
]

/*
 * create init function

*
*   1. select freelancer_table from DOM
*   2. create DOM elements
*       -table
*       -thead
*           -tr (header row)
*       -tbody
*   3. Add text to the header row where the text matches
the object key of a freelancer 
*   4. Append header row to the thead
*   5. Append thead and tbody to table
*   6. Append table to freelancer_container
*   7. Call function created below to render the freelancer array
*   8. Call the function below to render the average price
*/
function init() {
    const freelancer = document.querySelector("#freelancer");

    // const h1 = document.createElement("h1");
    // h1.textContent = "Freelancer Forum";
    // freelancer.append(h1);

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const header_row = document.createElement("tr");

    for (let key in freelancers[0]) {
        const th = document.createElement("th");
        th.textContent = key;

        header_row.append(th);
    }
    thead.append(header_row);
    table.append(thead);
    table.append(tbody);

    freelancer.append(table);

    //call function you made below here
    freelancerArray();
}

/**
 * create function to render the freelancer array to the DOM
 * 
 *      1. select tbody from DOM
 *      2. map over freelancer array
 *          2-1. create elements
 *                  -tr
 *                  -td (name)
 *                  -td (occupation)
 *                  -td (starting price)
 *          2-2. Add text top each td representing the value of the freelancer object
 *          2-3. Append tds to tr
 *          2-4. return tr
 *      3. replace children of tbody with the elements created in the map
 */
function freelancerArray() {
    const freelancerTable = document.querySelector("tbody");

    const freelancerElements = freelancers.map((freelancer) => {
        const row = document.createElement("tr");

        const freelancer_name = document.createElement("td");
        freelancer_name.textContent = freelancer.Name;

        const freelancer_occ = document.createElement("td");
        freelancer_occ.textContent = freelancer.Occupation;

        const freelancer_price = document.createElement("td");
        freelancer_price.textContent = freelancer.Price;

        row.append(freelancer_name, freelancer_occ, freelancer_price);

        return row;
    });

    freelancerTable.replaceChildren(...freelancerElements);
}
/**
 * Create a function to calculate the average freelancer price to the DOM
 * 
 *      1. get average_price span and p tag from DOM
 *      2. call sum function with the freelancer array
 *      3. call avg function passing the calculated sum and the freelancer array
 *      4. update textContent of the span with the avg
 *          if textContent doesn't work user innerHTML
 *      5. replace children of p tag with the updated span
 
 * 
 * @param {Number} totalPrice
 * @param {Array} array
 * @returns Number
 */
function addPrice(freelancers){
    const priceSum = freelancers.reduce((total, freelancer) => {
    return total += freelancer.Price
    },0)
    return priceSum
}
function avg(priceSum, arr) {
    return priceSum / arr.length;
}
/**
 *  Create a function to add a new freelancer to the frelancer array
 * 
 *      1. create variable for the new freelancer object
 *      2. set the name value of our new freelancer to a random name selected from our names array
 *      3. set the occupation value of our new freelancer to a random occupation selected from our occupations array
 *      4. generate random price for new freelancer
 * new_newfreelancer --> {name: 'Alex', occupation: 'writer', price: 75}
 * 
 *      5. add new freelancer to the freelancers array
 *      6. Call the function created above to render freelancer array
 *      7. Call the function above to render the average price
 */

// setInterval calling the function that adds a new freelancer every second aka 1000 miliseconds


//call init function
init();

