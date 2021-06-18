//fill in the table with the data

var tbody = d3.select("tbody");

data.forEach((ufoReport) => {
    let row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

//from data.js;

var tableData = data;

// create filters
var button = d3.select("#filter-btn");
button.on("click", runEnter);

//var filters = d3.select("#datetime");
//filters.on("click", runEnter);

function runEnter(){
    //prevent the page from refreshing
    d3.event.preventDefault();

    let inputElement = d3.select("#datetime");
    
    let inputValue = inputElement.property("value");

    let filteredData = tableData.filter(tableData => tableData.datetime == inputValue);

    tbody.html("");

    filteredData.forEach((ufoReport) => {
        let row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
