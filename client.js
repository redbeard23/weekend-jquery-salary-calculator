
// get submit button to add employee info 
//- store the info to calculate monthly costs
//- appen info to DOM
//- if total monthly cost exceeds $20,000, add red background to total monthly cost
//- create a delete button 
//- make sure info is in a table 

// create array with employee info
const employeeInfo = [
    {
        firstName: "",
        lastName: "",
        employeeID: "",
        title: "",
        annualSalary: ""
    }
];

// start project off in 
$(document).ready(function() {
    console.log("Ready Up");

// select button element and when the user clicks on the submit button 
// add employee info to the table 
$("#submitEmployeeInfo").on("click", function(event) {
//need to target form values 
const firstName = $("#firstName").val();
const lastName = $("#lastName").val();
const id = $("#idNumber").val();
const title = $("#title").val();
const annualSalary = $("#annualSalary").val();
// append employee info to DOM
addEmployee(firstName, lastName, id, title, annualSalary);
});

// must clear values before putting them into table 
$("#employeeTable").empty();

// create for loop to go through employee info 
for (let i=0; i < employeeInfo.length; i++) {
// target employee header 
addEmployee(
    employeeInfo[i].firstName,
    employeeInfo[i].lastName,
    employeeInfo[i].employeeID,
    employeeInfo[i].title,
    employeeInfo[i].annualSalary,
);
}

// create a new function that adds employees info to table
function addEmployee(firstName, lastName, id, title, annualSalary) {
    $('#employeeTable').append(`
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Employee ID</th>
                    <th>Title</th>
                    <th>Annual Salary</th>
                    <th>Delete</th>
                </tr>
                <tr>
                    <td>${firstName}</td>
                    <td>${lastName}</td>
                    <td>${idNumber}</td>
                    <td>${title}</td>
                    <td>${annualSalary}</td>
            </thead>
        </table>
    `);

}

});