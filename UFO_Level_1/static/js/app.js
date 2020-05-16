// from data.js
var tableData = data;
//console.log(tableData)

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Use D3 to select the Filter button
var button = d3.select("#filter-btn");
var form = d3.select("#form")
var reset = d3.select("#reset-btn");

tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  button.on('click', runEnter);
  form.on("submit", runEnter);
  reset.on("click", runReset);

  function runReset(){
    d3.event.preventDefault();
    tbody.html("");
    //clear the input value
    d3.select("#datetime").node().value = "";
    tableData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
  };
  
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