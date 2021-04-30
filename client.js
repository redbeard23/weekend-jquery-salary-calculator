// get submit button to add employee info 
//- store the info to calculate monthly costs
//- appen info to DOM
//- if total monthly cost exceeds $20,000, add red background to total monthly cost
//- create a delete button 
//- make sure info is in a table 

const myArray = [];

// start project off in 
$(document).ready(function() {
    console.log("Ready Up");

// select button element and when the user clicks on submit button 
// add employee info to the table 
$('#add-employee').on('click', function(event) {

    // need to target form values
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const id = $('#id').val();
    const title = $('#title').val();
    const annualSalary = $('#annualSalary').val();


// clear the form 
    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualSalary').val('');

// don't forget to push them into form 
    const newEmployee = {
        firstName: firstName,
        lastName: lastName,
        id: id,
        title: title,
        annualSalary: annualSalary
    }

myArray.push(newEmployee);

// append employee info to the table
    $('#employee-table').append(`
        <tr>
            <td>${newEmployee.firstName}</td>
            <td>${newEmployee.lastName}</td>
            <td>${newEmployee.id}</td>
            <td>${newEmployee.title}</td>
            <td>${newEmployee.annualSalary}</td>
            <td><button class="remove-employee">Delete</button>
        </tr>
    `);

});

});