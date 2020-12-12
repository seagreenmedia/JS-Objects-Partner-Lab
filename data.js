// let userData = [
//     ["Kaleb", "Burd", "Instructor", "JavaScript"],
//     ["Froilan", "Miranda", "Instructor", "COBOL"],
//     ["Froilanda", "Miran", "Student", "Java"],
//     ["Val", "Fragier", "Instructor", "JavaScript"],
// ];

// const mySpecialObject = {
//     key: 'value',
//     hello: () => { console.log('hello world ')}
// };

// console.log(mySpecialObject.key);
// console.log(mySpecialObject.hello());

// let user = {
//     someParameter: ''
// };

// function gatherData(event) {
//     event.preventDefault();
//     let myForm = document.getElementById("myForm");
//     let formData = new FormData(myForm);
//     console.log(myForm);
//     const firstName = formData.get('user_firstName');
//     const lastName = formData.get('user_lastName');
//     const age = formData.get('age');
//     const password = formData.get('password');
//     const passwordConf = formData.get('passwordConf');
//     console.log(firstName, lastName, age, password, passwordConf);

//     user = {
//         firstName: firstName,
//         lastName: lastName,
//         age: age,
//         password: password,
//         passwordConf: passwordConf
//     }

//     console.log(user);
// }

// document.getElementById("submitButton").addEventListener("click", gatherData);

// let object = {}

// let person = {
//     firstName: 'Joh',
//     lastName: 'Doe',
//     age: '26',
// };

// console.log(person['firstName']); // John
// console.log(person.firstName); // John
// console.log(person.lastName) // silly
// console.log(person.age); //cheese

// // some other type of task
// // ....

// person.job = 'Software Developer';

// console.log(person.job) // Software Developer

// let license = {
//     name: 'John',
//     DOB: '12/9/89',
//     maritalStatus: false,
//     certifications: ['Motorcycle', 'Unicycle']
// }
// console.log(license);

// document.getElementById("license").innerHTML += `<p>Name: ${license.name}</p><br>` ;
// document.getElementById("license").innerHTML += `<p>DOB: ${license.DOB}</p><br>` ;
// document.getElementById("license").innerHTML += `<p>Marital Status: ${license.maritalStatus}</p><br>` ;

// document.getElementById("image").src="ProfPic.jpg"

// document.getElementById("license").innerHTML += `<ul id="list"></ul>` ;
// document.getElementById("list").innerText += "Certifications";


// for (let i = 0; i< license.certifications.length; i++){
//     document.getElementById("list").innerHTML += `<li>${license.certifications[i]}</li>`;
// }

let userData = [
    ["Kaleb", "Burd", "Instructor", "JavaScript"],
    ["Froilan", "Miranda", "Instructor", "COBOL"],
    ["Froilanda", "Miran", "Student", "Java"],
    ["Val", "Fragier", "Instructor", "JavaScript"],
    ["John", "Redden", "Student", "JavaScript"],
    ["Elu", "Arias", "Student", "CSS"],
];



// let array = [];
// let user;


// for(let i = 0; i < userData.length; i++){
//     user = {
//         // firstName: "",
//         // lastName: "",
//         // role: "",
//         // language: "",
//     };
//     user.firstName = userData[i][0];
//     user.lastName = userData[i][1];
//     user.role = userData[i][2];
//     user.language = userData[i][3];
//     array.push(user);
//     //console.log(user);
// }
// console.log(array);


// let user1 = {
//     firstName: "Kaleb",
//     lastName: "Burd",
//     role: "Instructor",
//     language: "JavaScript",
// }

// let user2 = {
//     firstName: "John",
//     lastName: "Redden",
//     role: "Student",
//     language: "JavaScript",
// }

// let user3 = {
//     firstName: "Elu",
//     lastName: "Arias",
//     role: "Student",
//     language: "CSS",
// }

// console.log(user1);
// console.log(user2);
// console.log(user3);

class Objects {
    constructor(){
        this.firstName = null;
        this.lastName = null;
        this.role = null;
        this.language = null; 
    };

    getFirstName(){
        return this.firstName;
    }

    getLastName(){
        return this.lastName;
    }

    getRole(){
        return this.role;
    }

    getLanguage(){
        return this.language;
    }

    setFirstName(firstName){
        this.firstName = firstName;
    }

    setLastName(lastName){
        this.lastName = lastName;
    }

    setRole(role){
        this.role = role;
    }

    setLanguage(language){
        this.language = language;
    }

};

let array = [];
let user;


for(let i = 0; i < userData.length; i++){
    user = new Objects();
    user.setFirstName(userData[i][0]);
    user.setLastName(userData[i][1]);
    user.setRole(userData[i][2]);
    user.setLanguage(userData[i][3]);
    array.push(user);
    //console.log(user);
}
console.log(array);

// let john = new Objects();
// john.setFirstName("John");
// console.log(john);