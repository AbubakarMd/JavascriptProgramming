function getUserRole(name, role) { // function is decleared without storing in variable
    switch (role) {
        case "admin":
            return `${name} is admin`;
            break;
        case "subadmin":
            return `${name} is subadmin`;
            break;
        case "testadmin":
            return `${name} is test admin`;
            break;
        case "guest":
            return `${name} is guest`;
            break;
        default:
            return `${name} is trial`;
            break
    }
}



var user = getUserRole("abubakar", "testadmin"); //we create variable to store values 
console.log(user);

console.log(getUserRole("github", "guest")); // we directly print value of function




// var getUserRole = function(name, role) { // function is stored in variable
//     switch (role) {
//         case "admin":
//             return `${name} is admin`;
//             break;
//         case "subadmin":
//             return `${name} is subadmin`;
//             break;
//         case "testadmin":
//             return `${name} is test admin`;
//             break;
//         case "guest":
//             return `${name} is guest`;
//             break;
//         default:
//             return `${name} is trial`;
//             break
//     }
// }

// var rol = readline();


// console.log(getUserRole("abubakar", rol)); // we directly print value of function
