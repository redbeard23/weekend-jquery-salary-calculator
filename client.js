//first step, create employees objects with properties 
const employees = [

    {
    firstName: 'Jen',
    lastName: 'Barber',
    id: 4521,
    title: 'Team Lead',
    annualSalary: 80000
    },

    {
    firstName: 'Maurice',
    lastName: 'Moss',
    id: 8724,
    title: 'Support Team',
    annualSalary: 58000
    },

    {
    firstName: 'Roy',
    lastName: 'Smith',
    id: 9623,
    title: 'Quality Assurance',
    annualSalary: 48000
    },

];


function pacesSalaryCalculator() {
    // make a click button for the form
    $('#submit-button').on('click', function (event) {  
        const firstName = $('#employee-firstName').val();
        const lastName = $('#employee-lastName').val();
        const id = $('#employee-id').val();
        const title  = $('#employee-title').val();
        const employeeSalary = $('#employee-employeeSalary').val();
        // call the function to append to DOM 

});

    // empty the list items
    $('#employees-list').empty();

    
    // loop over employees array 
for (let i=0; i<employees.length; i++) {

    // append each employee to DOM and create a table
    $('#employees-list').append(`
        <table>       
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>ID Number</th>
                <th>Title</th>
                <th>Annual Salary</th>
            </tr>
        

            <tr>
                <td>${employees[i].firstName}</td>
                <td>${employees[i].lastName}</td>
                <td>${employees[i].id}</td> 
                <td>${employees[i].title}</td>
                <td>${employees[i].annualSalary}</td>
                <td colspan="2">
                <td><button class="delete">Delete</button></td>
            </tr>
                    
                </tbody>
        </table>
    
    `);

}
}

// use event.target to make the delete buttons work and link it to the DOM 
// create the button function 
    $('#employees-list').on('click', '.remove', function (event) {
        let deleteButtonInfo = $(event.target);
        deleteButtonInfo.closest('ul').remove();
    });



    // run this function after everything is ready 

    $(pacesSalaryCalculator);
    console.log('is working!');