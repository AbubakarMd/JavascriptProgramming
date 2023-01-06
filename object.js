var login = {
    university: "LPU",
    stream: "MCA",
    section: 13,
    state: "Punjab",
    mode: "offline",
}

console.log(login);
console.table(login); //show output in table format
console.group(login); // show table in group format


console.log(login.university);
console.log(login["state"]);


console.log(login.section);
login.section = 18;
console.log(login.section);
