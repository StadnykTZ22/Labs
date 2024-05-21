let first = prompt("Введіть число для першого завдання:")
taskOne(first)

taskTwo();

let third = prompt('Введіть число для третього завдання: ');
taskThree(third);

function taskOne(num) {
	if (isNaN(first) === false) {
		if (first % 2 == 0) {
			alert('Число парне')
		}
		else {
			alert('Число не парне')
		}
	}
	else {
		alert('Пуста стрічка')
	}
}

function taskTwo() {
	let array = [];
	let search = 0;
	let Bolle = true;
	let sam = 0;
	for (let b = 1; b < 20; b++) {
		if (b === 1) {
			console.log("Перший елемент пропущено")
		}
		else {
			for (let i = 2; i < b; i++) {
				if (b % i == 0) {
					Bolle = false;
					break;
				}
				else {
					Bolle = true;
				}
			}

			if (Bolle == true) {
				array.push(b);
				search++;
			}
			if (search === 5) {
				break;
			}
		}
	}
	console.log(array);
	for (let z = 0; z < 5; z++) {
		sam += array[z];
		console.log(sam);
	}

	alert(sam);
}

function taskThree(third) {
	let resault = 0;
	let ones = "0";
	let fitch;
	for (let y = 0; y < third; y++) {
		ones = ones + "1";
		fitch = parseInt(ones);
		resault += fitch;
	}
	alert(resault)
}