// Write your solution in this file!

const employee = {
    "name"          : "Sammy",
    "streetAddress" : "Embakasi"
}


function updateEmployeeWithKeyAndValue(employee, key, value){
    const tempO = {...employee};
    tempO[key] = value;
    return tempO;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const tempO = {...employee};
    delete tempO[key];
    return tempO;
}


function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}