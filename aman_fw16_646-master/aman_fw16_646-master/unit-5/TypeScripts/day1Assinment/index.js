function sort(arr, par) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j][par] > arr[j + 1][par]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
var person = [
    { id: 3, age: 43, salary: 13332, name: "ujjwal" },
    { id: 1, age: 21, salary: 90000, name: "aman" },
    { id: 4, age: 32, salary: 54442, name: "prastabt" },
    { id: 2, age: 19, salary: 1900, name: "cutri" }
];
var Masiacher = [
    { id: 5, name: "ankush", noOfStudent: 450, subject: "physics" },
    { id: 8, name: "prabhanjan", noOfStudent: 1, subject: "chemistry" },
    { id: 3, name: "varun", noOfStudent: 600, subject: "maths" },
    { id: 2, name: "chandra", noOfStudent: 650, subject: "chemistry" }
];
sort(person, "name");
console.log(person);
sort(Masiacher, "subject");
console.log(Masiacher);
