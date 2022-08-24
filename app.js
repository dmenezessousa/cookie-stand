Seattle = {
  min: 23,
  max: 65,
  avg: 6.3,
  avgCookies: function () {
    //average cookies per customer per hour
    return Math.floor(
      (Math.random() * (this.max - this.min + 1) + this.min) * this.avg
    );
  },
  addHtml: function () {
    //adds html to the table
    let html = `
    <table style="border-style: solid">
      <tr >
        <th>Stores</th>
        <th>6:00am</th>
        <th>7:00am</th>
        <th>8:00am</th>
        <th>9:00am</th>
        <th>10:00am</th>
        <th>11:00am</th>
        <th>12:00am</th>
        <th>1:00pm</th>
        <th>2:00pm</th>
        <th>3:00pm</th>
        <th>4:00pm</th>
        <th>5:00pm</th>
        <th>6:00pm</th>
        <th>7:00pm</th>
        <th>Total</th>
        </tr>
        <tr>
        <td><strong>Seattle</strong></td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td> 
        <td><h2>${this.total()}</h2></td>
        <tr>
        <td><strong>Tokyo</strong></td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td> 
        <td><h2>${this.total()}</h2></td> 
        </tr>
        <tr>
        <td><strong>Dubai</strong></td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td> 
        <td><h2>${this.total()}</h2></td> 
        </tr>
        <tr>
        <td><strong>Paris</strong></td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td> 
        <td><h2>${this.total()}</h2></td> 
        </tr>
        <tr>
        <td><strong>Lima</strong></td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td>
        <td>${this.avgCookies()} </td> 
        <td><h2>${this.total()}</h2></td> 
        </tr>
        </table>
        
        `;
    document.getElementById("seattle").innerHTML = html;
  },
  total: function () {
    //total cookies sold
    let total = 0;
    for (let i = 0; i < 14; i++) {
      total += this.avgCookies();
    }
    return total;
  },
};

function addTable() {
  //Variables
  let h1 = document.createElement("h1");
  let table = document.createElement("table");
  let total = document.createElement("h2");
  let header = document.createElement("th");
  let header1 = document.createElement("th");
  let header2 = document.createElement("th");

  //Content
  header1.innerHTML = "Time ";
  header2.innerHTML = "Cookies ";
  header.appendChild(header1); //append header1 to header
  header.appendChild(header2); //append header2 to header
  table.appendChild(header); //append header to table
  h1.innerHTML = "Seattle"; //set h1 content
  total.innerHTML = "Total: " + Seattle.total() + " cookies"; //total cookies

  for (let i = 6; i <= 12; i++) {
    //loop for 6am to 12pm
    let row = document.createElement("tr"); //create row
    let time = document.createElement("td"); //create td for time
    time.innerHTML = i + "am: " + " " + Seattle.avgCookies() + " cookies"; //set time content
    row.appendChild(time);
    table.appendChild(row);
  }
  for (let i = 1; i <= 7; i++) {
    //loop for 1pm to 7pm
    let row = document.createElement("tr");
    let time = document.createElement("td");
    time.innerHTML = i + "pm: " + " " + Seattle.avgCookies() + " cookies";
    row.appendChild(time);
    table.appendChild(row);
  }

  //Append
  document.getElementById("seattle").appendChild(h1); //append h1 to seattle
  document.getElementById("seattle").appendChild(table); //append table to seattle
  document.getElementById("seattle").appendChild(total); //append total to seattle
}

Seattle.addHtml();
