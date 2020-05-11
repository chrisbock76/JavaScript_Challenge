// from data.js
var tableData = data;
//console.log(tableData)

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Use D3 to select the Filter button
var button = d3.select("#filter-btn");
var form = d3.select("#form")

tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  button.on('click', runEnter);
  form.on("submit", runEnter);
  
  function runEnter (){
    d3.event.preventDefault();
    let inputValue = d3.select('.form-control');
    let inputDate = inputValue.property('value');
    //console.log(inputDate)
    let filterData = tableData.filter(dateSighting => dateSighting.datetime === inputDate);
    //console.log(filterData)
    tbody.html("");

    filterData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
      });
    });
  };

/*
// Use D3 to select the table body
var tbody = d3.select("tbody");

// Iterate through each siting
tableData.forEach(([datetime, city, state, country, shape, durationMinutes, comments]) => {

  // Append one table row per siting
  var row = tbody.append("tr");

  // append one cell for each metadata per siting
  row.append("td").text(datetime);
  row.append("td").text(city);
  row.append("td").text(state);
  row.append("td").text(country);
  row.append("td").text(shape);
  row.append("td").text(durationMinutes);
  row.append("td").text(comments);

});
*/

/*
// from data.js
var tableData = data;

// YOUR CODE HERE!


var button = d3.select('#filter-btn')
var table = d3.select('#ufo-table')
var tableBody = d3.select('tbody')



button.on('click', function(){
    event.preventDefault()
    let inputelement = d3.select('.form-control')
    let inputdate = inputelement.property('value')
    //console.log(inputdate)
    let filtereddata = tableData.filter(ufo => ufo.datetime === inputdate)
    //console.log(filtereddata)
    tableBody.html("")
    
    //Object.entries(filtereddata).forEach((entry) => {
        //let objects = entry[1];
        //objects.forEach((obj) => {
            //console.log(obj.datetime)
        //})
        //entry.forEach((value) => {
            //console.log(value)
        //})
    
    Object.entries(filtereddata).forEach(([key, value]) => {
        let row = tableBody.append('tr')
        //var cell = row.append("td");
        //cell.text(value);

        //console.log(value)
        let cell1 = row.append("td")
        cell1.text(value.datetime)
        let cell2 = row.append("td")
        cell2.text(value.city)
        let cell3 = row.append("td")
        cell3.text(value.state)
        let cell4 = row.append("td")
        cell4.text(value.country)
        let cell5 = row.append("td")
        cell5.text(value.shape)
        let cell6 = row.append("td")
        cell6.text(value.durationMinutes)
        let cell7 = row.append("td")
        cell7.text(value.comments)
        
    });
    

});
*/
