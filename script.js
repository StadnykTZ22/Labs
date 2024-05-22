function Employee(name, lastName, baseSalary, experience) {
	this.name = name;
	this.lastName = lastName;
	this.baseSalary = baseSalary;
	this.experience = experience;
};

Employee.prototype.giveSalary = function () {
	return document.write("<p>" + this.name + " " + this.lastName + " одержує " + this.getSalary() + " доларів " + "</p>")
}

Employee.prototype.getSalary = function () {
	let countedSalary = this.baseSalary;
	if (this.experience >= 2 && this.experience < 5) {
		countedSalary = countedSalary + 200;
	}
	else if (this.experience >= 5) {
		countedSalary = countedSalary * 1.2 + 500;
	}
	return countedSalary;
}

function Designer(name, lastName, baseSalary, experience, coef) {
	Employee.call(this, name, lastName, baseSalary, experience);
	this.coef = coef;
};

Designer.prototype = Object.create(Employee.prototype);

Designer.prototype.getSalary = function () {
	let countedSalary = Employee.prototype.getSalary.call(this);
	return countedSalary * this.coef;
}

function Developer(name, lastName, baseSalary, experience) {
	Employee.call(this, name, lastName, baseSalary, experience);
}

Developer.prototype = Object.create(Employee.prototype);

function Manager(name, lastName, baseSalary, experience, team) {
	Employee.call(this, name, lastName, baseSalary, experience);
	this.team = team;
};

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.getSalary = function () {
	let countedSalary = Employee.prototype.getSalary.call(this);

	if (this.team.length >= 5 && this.team.length < 10) {
		countedSalary = countedSalary + 200;
	}
	else if (this.team.length >= 10) {
		countedSalary = countedSalary + 300;
	}

	let wor = 0;
	for (key in this.team) {
		if (this.team[key] instanceof Developer) {
			wor++;
		}
	}
	if (wor > (this.team.length / 2)) {
		countedSalary *= 1.1;
	}
	return countedSalary;
}

function Department() {
	this.managers = [];
}

Department.prototype.giveSalary = function () {
	this.managers.forEach(function (manager) {
		manager.giveSalary();
		manager.team.forEach(function (slaves) {
			slaves.giveSalary();
		});
	});
}

function main() {
	const dev = new Developer("Іван", "Мартинов", 1300, 5);
	const dev2 = new Developer("Василь", "Петров", 1300, 1);
	const dev3 = new Developer("Костянтин", "Жулінський", 1300, 9);
	const dev4 = new Developer("Микола", "Яким", 1300, 9);
	const des = new Designer("Максим", "Мельник", 1800, 6, 0.8);
	const des1 = new Designer("Юлія", "Брід", 1800, 6, 0.9);
	const manager = new Manager("Олександр", "Кравчук", 2000, 6, [dev, dev2, dev3, dev4, des, des1]);


	const departmen = new Department();
	departmen.managers.push(manager);
	departmen.giveSalary();
}
main();