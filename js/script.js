let serviceID = document.getElementById('services');
let cooperationID = document.getElementById('cooperation');

let companyBlock = document.querySelector('.company-block');
let serviceBlock = document.querySelector('.service-block');
let cooperationBlock = document.querySelector('.cooperation-block');

serviceID.onclick = function() {
  serviceBlock.scrollIntoView({behavior: "smooth"})
}

cooperationID.onclick = function() {
  cooperationBlock.scrollIntoView({behavior: "smooth"})
}