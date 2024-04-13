// // Custom JavaScript

// // document.addEventListener('DOMContentLoaded', function () {
// //     var calculateButton = document.getElementById('calculateButton');
// //     if (calculateButton) {
// //         calculateButton.addEventListener('click', calculateTax);
// //     } else {
// //         console.error("Element with ID 'calculateButton' not found.");
// //     }
// // });

// // function calculateTax() {
// //     var income = parseFloat(document.getElementById('income').value);
// //     var extraIncome = parseFloat(document.getElementById('extraIncome').value);
// //     var deductions = parseFloat(document.getElementById('deductions').value);
// //     var age = document.getElementById('age').value;

// //     if (isNaN(income) || isNaN(extraIncome) || isNaN(deductions)) {
// //         alert("Please enter valid income, extra income, and deductions amounts.");
// //         return;
// //     }

// //     if (age === '') {
// //         alert("Please select your age.");
// //         return;
// //     }

// //     var totalIncome = income + extraIncome - deductions;
// //     var tax = 0;

// //     if (totalIncome > 800000) {
// //         if (age === '<40') {
// //             tax = (totalIncome - 800000) * 0.3;
// //         } else if (age === '>=40&<60') {
// //             tax = (totalIncome - 800000) * 0.4;
// //         } else if (age === '>=60') {
// //             tax = (totalIncome - 800000) * 0.1;
// //         }
// //     }

// //     // Display the tax result in the modal
// //     var taxResultModal = document.getElementById('taxResult');
// //     taxResultModal.innerText = "Tax to be paid: " + tax.toFixed(2);
// // }

// // Custom JavaScript

// document.getElementById('calculateButton').addEventListener('click', Submit);

// function calculateTax() {
//     var income = parseFloat(document.getElementById('income').value);
//     var extraIncome = parseFloat(document.getElementById('extraIncome').value);
//     var deductions = parseFloat(document.getElementById('deductions').value);
//     var age = document.getElementById('age').value;

//     if (isNaN(income) || isNaN(extraIncome) || isNaN(deductions)) {
//         alert("Please enter valid income, extra income, and deductions amounts.");
//         return;
//     }

//     if (age === '') {
//         alert("Please select your age.");
//         return;
//     }

//     var totalIncome = income + extraIncome - deductions;
//     var tax = 0;

//     if (totalIncome > 800000) {
//         if (age === '<40') {
//             tax = (totalIncome - 800000) * 0.3;
//         } else if (age === '>=40&<60') {
//             tax = (totalIncome - 800000) * 0.4;
//         } else if (age === '>=60') {
//             tax = (totalIncome - 800000) * 0.1;
//         }
//     }

//     // Display the tax result in the modal
//     var taxResultElement = document.getElementById('taxResult');
//     taxResultElement.innerText = "Tax to be paid: " + tax.toFixed(2);
    
//     // Show the modal
//     $('#taxResultModal').modal('show');
// }

$(document).ready(function() {
    // Hide error icons by default
    $('.error-icon').hide();
  
    // Submit form
    $('#taxForm').submit(function(event) {
      event.preventDefault();
      
      // Validate inputs
      var isValid = true;
      $('.form-control').each(function() {
        if (!$(this).val()) {
          isValid = false;
          $(this).next('.error-icon').show();
        } else {
          $(this).next('.error-icon').hide();
        }
      });
  
      if (!isValid) {
        return;
      }
  
      // Calculate tax
      var grossIncome = parseFloat($('#grossIncome').val());
      var extraIncome = parseFloat($('#extraIncome').val() || 0);
      var deductions = parseFloat($('#deductions').val() || 0);
      var age = $('#age').val();
  
      var taxRate = 0;
      if (age === '<40') {
        taxRate = 0.3;
      } else if (age === '>=40 & <60') {
        taxRate = 0.4;
      } else if (age === '>=60') {
        taxRate = 0.1;
      }
  
      var taxableIncome = grossIncome + extraIncome - deductions - 8;
      var taxAmount = taxableIncome > 0 ? taxRate * taxableIncome : 0;
  
      // Display result in modal
      $('#resultBody').html('<p><h4>Your overall income will be: </h4>' + taxAmount.toFixed(2) + ' ' + 'after tax deduction</p>');
      $('#resultModal').modal('show').css('display', 'flex'); // Make modal display as flex
    });
  });
  

