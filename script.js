
$(document).ready(function() {
    $('.error-icon').hide();
  
    $('#taxForm').submit(function(event) {
      event.preventDefault();
      
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
  

