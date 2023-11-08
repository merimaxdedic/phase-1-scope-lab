var customerName = 'bob';

function getCustomerName() {
  return customerName;
}

console.log(getCustomerName());

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
  }

    function setBestCustomer() {
    bestCustomer = 'not bob';
  }

  function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
  }


  "use strict";

const leastFavoriteCustomer = "John";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Jane"; 
}

changeLeastFavoriteCustomer();