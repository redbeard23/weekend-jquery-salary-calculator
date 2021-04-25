$(pacesSalaryCalculator);

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


    // run this function after everything is ready 
function pacesSalaryCalculator() {
    $('#add-employee').on('click', function (event) {
        const firstName = $()
    console.log('is working!');

});

    
    
    // empty the list items
    $('#employees-list').empty();

    
    // loop over employees array 
for (let i=0; i<employees.length; i++) {

    // append each employee to DOM
    let item = $('<li>employees-list</li>');

    $('#employees-list').append(`
    <ul>
        <table>
            <tbody>

                    <tr>
                    <td>${employees[i].firstName}</td>
                    <td>${employees[i].lastName}</td>
                    <td>${employees[i].id}</td>
                    <td>${employees[i].title}</td>
                    <td>${employees[i].annualSalary}</td>
                    </tr>
                    <tr>
                        <td colspan="2">
                        <button class="delete">Delete</button>
                    </tr>
            </tbody>
        </table>
    </ul>
    `);
}

}

