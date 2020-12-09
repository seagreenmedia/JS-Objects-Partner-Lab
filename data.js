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

function gatherData(event) {
    event.preventDefault();
    let myForm = document.getElementById("myForm");
    let formData = new FormData(myForm);
    console.log(myForm);
    const firstName = formData.get('user_firstName');
    const lastName = formData.get('user_lastName');
    const age = formData.get('age');
    const password = formData.get('password');
    const passwordConf = formData.get('passwordConf');
    console.log(firstName, lastName, age, password, passwordConf);
}

document.getElementById("submitButton").addEventListener("click", gatherData);