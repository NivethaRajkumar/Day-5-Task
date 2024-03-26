const Resume = {
    "Name":"Nivetha",
    "Email":"nivetha@gmail.com",
    "Mobilenumber":"9876543210",
    "Nationality":"Indian",
    "Maritalstatus":"Married",
    "Gender":"Female",
    "Skills":["AWS","Javascript","Mongodb","Reactjs","Expressjs","Nodejs"],
    "Languagesknown":["English","Tamil","Kanada"],
    "Education":"UG-Degree",
    "Experience":"AWS-Engineer"
}
console.log(Resume);

//for loop
const values = Object.values(Resume);
for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
}

//for in loop
for (let key in Resume) {
    console.log(Resume[key]);
}

//for of loop
for (let value of Object.values(Resume)) {
    console.log(value);
}

//for each loop
Object.values(Resume).forEach(value => {
    console.log(value);
});


