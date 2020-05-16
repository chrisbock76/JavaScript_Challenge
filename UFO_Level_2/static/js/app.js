// from data.js
var tableData = data;
//console.log(tableData)

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Use D3 to select the Filter button
var button = d3.select("#filter-btn");
var reset = d3.select("#reset-btn");
//var form = d3.select("#form")

// Make createTable function to add tables to webpage
function createTable(data) {
  tbody.html("");
  data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

// Use createTable function to load initial table to webpage
createTable(tableData);


// Set-up reset button to reset the table
reset.on("click", runReset);

// On "click" of reset button, runReset to reset the table
function runReset(){
  d3.event.preventDefault();
  //clear any input values
  //more concise code for ALL of the following would be tbody.text("");
  d3.selectAll("#datetime").node().value = "";
  d3.select('#city').node().value = "";
  d3.select('#state').node().value = "";
  d3.select('#country').node().value = "";
  d3.select('#shape').node().value = "";
  createTable(tableData).node().value = "";
};


// Place input values into a variable
var date = d3.select('#datetime');
var city = d3.select('#city');
var state = d3.select('#state');
var country = d3.select('#country');
var shape = d3.select('#shape');

// Create a new function to filter the data based on input
function updateData(){

  // Prevent the webpage from refreshing
  d3.event.preventDefault();

  // Grab given input values
  var inputDate = date.property("value")
  var inputCity = city.property("value")
  var inputState = state.property("value")
  var inputCountry = country.property("value")
  var inputShape = shape.property("value")

  var filteredData = tableData.filter(

    //create new function to filter data
    function(filterBy){
      return ((filterBy.datetime === inputDate || inputDate == "") &&
                (filterBy.city === inputCity || inputCity == "") &&
                (filterBy.state === inputState || inputState == "") &&
                (filterBy.country === inputCountry || inputCountry == "") &&
                (filterBy.shape === inputShape || inputShape == "") 
            )      
    });

    //create new filtered table using function createTable
    createTable(filteredData);
};

// Use event handler to select desired input data to filter by
button.on('click', updateData);


/* Attempted to use switch function without success below:
    THIS CODE BELOW DOES NOT WORK


  function getInput(z) {
    var date = d3.select('#datetime');
    var inputDate = date.property("value");
    console.log(inputDate);
    var city = d3.select('#city').property("value");
        
    var input = ""
    switch (z) {
      case "datetime":
        input = date;
        //clear the input value
        d3.select("#datetime").node().value = "";
        console.log(input)
        break;

      case "city":
        input = city;
        break;
    }
    
    let filterData = tableData.filter(ufoSighting => ufoSighting.input)
    tbody.html("");

  FilterTableData(filterData);
}

d3.selectAll(".form-control").on("change", FilterTableData);
*/

/*
  function runEnter (){
    d3.event.preventDefault();
    
    let inputDate = d3.select('#datetime').property('value');
    console.log(inputDate);
    let filterData = tableData.filter(dateSighting => dateSighting.datetime === inputDate);
    console.log(filterData);
    tbody.html("");
    FilterTableData(filterData);
    //clear the input value
    d3.select("#datetime").node().value = "";
    
    let inputCity = d3.select('#city').property('value');
    console.log(inputCity);
    //let filterData2 = filterData.filter(citySighting => citySighting.city === inputCity);
    //console.log(filterData2);
    //tbody.html("");
    //FilterTableData(filterData2);
    //d3.select("#city").node().value = ""; 
    
    };

    // Use D3 to create an event handler
d3.selectAll("body").on("change", FilterTableData);

var date = d3.selectAll('#datetime').node();

function getInput(filterData) {
  var input = ""
  switch (filterData) {
    case "datetime":
      input = date

  }
}
*/
