// Copyright (c) 2022 Allen Li All rights reserved
//
// Created by: Allen Li
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-06-HTML/sw.js", {
    scope: "/ICS2O-Unit5-06-HTML/",
  })
}

function myButtonClicked() {
  var numA = parseFloat(document.getElementById("firstNumber").value)
  var numB = parseFloat(document.getElementById("secondNumber").value)
  var product = 0
  var counter = 0

  while (counter < Math.abs(numB)) {
    counter++
    product = product + Math.abs(numA)
  }

  if ((numA < 0 && numB > 0) || (numB < 0 && numA > 0))
    document.getElementById("product").innerHTML = "The product is: " + product
  else
    document.getElementById("product").innerHTML = "The product is: " + product
}
