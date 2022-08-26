let storeHours = [
  "6:00am",
  "7:00am",
  "8:00am",
  "9:00am",
  "10:00am",
  "11:00am",
  "12:00pm",
  "1:00pm",
  "2:00pm",
  "3:00pm",
  "4:00pm",
  "5:00pm",
  "6:00pm",
  "7:00pm",
]; //array of hours

let allStores = [];

//Constructor for Store
function Store(name, minCust, maxCust, avgSales) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
  this.cookiesSold = [];
  this.totalCookies = 0;
  allStores.push(this);
}

//Stores and their properties
new Store("Seattle", 23, 65, 6.3);
new Store("Tokyo", 3, 24, 1.2);
new Store("Dubai", 11, 38, 3.7);
new Store("Paris", 20, 38, 2.3);
new Store("Lima", 2, 16, 4.6);

function random(min, max) {
  //random number generator
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

Store.prototype.saleEachHour = function () {
  //calculates cookies sold per hour
  for (let i = 0; i < storeHours.length; i++) {
    let sales = random(this.minCust, this.maxCust);
    let totalCookiesPerHour = Math.floor(sales * this.avgSales);
    let roundedCookies = Math.round(totalCookiesPerHour);
    this.cookiesSold.push(roundedCookies);
    this.totalCookies += roundedCookies;
    console.log(this.totalCookies);
  }
};

Store.prototype.renderHeader = function () {
  //renders header
  let table = document.getElementById("hours");
  let tr = document.createElement("tr");
  let th = document.createElement("th");

  th.textContent = "Store";
  tr.appendChild(th);
  table.appendChild(tr);
  for (let i = 0; i < storeHours.length; i++) {
    let th = document.createElement("th");
    th.textContent = storeHours[i];
    tr.appendChild(th);
    table.appendChild(tr);
  }
  // th.textContent = "Total";
  // tr.appendChild(th);
  table.appendChild(tr);
};

Store.prototype.render = function () {
  //renders table
  this.saleEachHour();
  let table = document.getElementById("allStores");
  let th = document.createElement("th");
  let tr = document.createElement("tr");

  th.textContent = this.name;
  tr.appendChild(th);
  table.appendChild(tr);
  for (let i = 0; i < this.cookiesSold.length; i++) {
    let td = document.createElement("td");
    tr.appendChild(td);
    td.textContent = this.cookiesSold[i];
  }

  let total = document.createElement("td");
  tr.appendChild(total);
  total.textContent = this.totalCookies;
  table.appendChild(tr);
};

Store.prototype.renderFooter = function () {
  let table = document.getElementById("salesperhour");
  let tr = document.createElement("tr");
  let th = document.createElement("th");
  th.textContent = "Totals";
  tr.appendChild(th);
  table.appendChild(tr);

  //renders footer
  for (let hour in storeHours) {
    let total = 0;
    let td = document.createElement("td");
    for (let store in allStores) {
      let currentStore = allStores[store];
      let currentHour = currentStore.cookiesSold[hour];
      total += currentHour;
    }
    td.textContent = total;
    tr.appendChild(td);
    table.appendChild(tr);
  }
  let td = document.createElement("td");
  let total = 0;
  for (let store in allStores) {
    let currentStore = allStores[store];
    total += currentStore.totalCookies;
  }
  td.textContent = total;
  tr.appendChild(td);
};

Store.prototype.renderAll = function () {
  for (let i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
};

let addStore = document.getElementById("addStore_form");
addStore.addEventListener("submit", function (event) {
  event.preventDefault();
  let name = event.target.storeName.value;
  let minCust = parseInt(event.target.minCust.value);
  let maxCust = parseInt(event.target.maxCust.value);
  let avgSales = parseInt(event.target.avgSales.value);
  new Store(name, minCust, maxCust, avgSales);
  event.target.reset();
  allStores[allStores.length - 1].render();
});

Store.prototype.renderHeader();
Store.prototype.renderAll();
Store.prototype.renderFooter();
