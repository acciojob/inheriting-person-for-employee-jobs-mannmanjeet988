// complete this js code
function Person(name, age) {
	this.name=name;
	this.age=age;
}

Person.prototype.greet=function(name,age){
	console.log(`hello, my name is ${this.name}, I am ${this.age}`)
}

function Employee(name, age, jobTitle) {
this.jobTitle=jobTitle;
}

Employee.prototype.greet=function(name,age,jobTitle){
	console.log(`hello, my name is ${this.name}, I am ${this.age}`, and my job title is ${this.jobTitle})
}

Employee.prototype.__proto= Person.prototype;

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
