// Code your solution in this file!

const logDriverNames = function(drivers) {
  return drivers.forEach(function(driver) {
    console.log(driver.name)})
}

function logDriversByHometown(drivers, hometown) {
  return drivers.forEach(function(driver) {
    if (driver.hometown == hometown) {
    console.log(driver.name)}
  })
}