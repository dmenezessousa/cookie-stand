let stores = [];

function Store(
  name,
  hourOpen,
  hourClosed,
  minCust,
  maxCust,
  avgSoldCookies,
  hourlyTotals
) {
  this.name = name;
  this.hourOpen = hourOpen;
  this.hourClosed = hourClosed;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSoldCookies = avgSoldCookies;
  this.hourlyTotals = hourlyTotals;
}

Store.prototype.custPerHour = function () {
  return Math.floor(
    this.minCust + Math.random() * (this.maxCust - this.minCust + 1)
  );
};

Store.prototype.calcCustPerHour = function () {
  let hourTotals = [];
  let hourTotalsIndex = 0;
  for (let i = this.hourOpen; i < this.hourClosed; i++) {
    hourTotals[hourTotalsIndex] = Math.round(
      this.custPerHour() * this.avgSoldCookies
    );
    hourTotalsIndex++;
  }
  this.hourlyTotals = hourTotals;
};

function addStore(data) {
  stores.push(
    new Store(
      data.name,
      data.hourOpen,
      data.hourClosed,
      data.minCust,
      data.maxCust,
      data.avgSoldCookies,
      data.hourlyTotals
    )
  );
}

addStore({
  name: "seattle",
  hourOpen: 6,
  hourClosed: 20,
  minCust: 23,
  maxCust: 65,
  avgSoldCookies: 6.3,
  hourlyTotals: [],
});
addStore({
  name: "tokyo",
  hourOpen: 6,
  hourClosed: 20,
  minCust: 3,
  maxCust: 24,
  avgSoldCookies: 1.2,
  hourlyTotals: [],
});
addStore({
  name: "dubai",
  hourOpen: 6,
  hourClosed: 20,
  minCust: 11,
  maxCust: 38,
  avgSoldCookies: 3.7,
  hourlyTotals: [],
});
addStore({
  name: "paris",
  hourOpen: 6,
  hourClosed: 20,
  minCust: 20,
  maxCust: 38,
  avgSoldCookies: 2.3,
  hourlyTotals: [],
});
addStore({
  name: "lima",
  hourOpen: 6,
  hourClosed: 20,
  minCust: 2,
  maxCust: 16,
  avgSoldCookies: 4.6,
  hourlyTotals: [],
});
