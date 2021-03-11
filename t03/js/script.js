class Human {
    constructor(firstName, lastName, gender, age, calories, sleep, rank) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.calories = calories;
		this.sleep = sleep;
		this.rank = rank;
    }

    feed() {
    	document.getElementById("calories").innerHTML = "Calories: " + person.calories;
	    this.calories = person.calories;
	    if (this.calories < 500) {
	        setTimeout(() => {document.getElementById("message-here").innerHTML = "Nom nom nom";}, 100);
	        setTimeout(() => {document.getElementById("message-here").innerHTML = "...";}, 10000);
	        return person.calories += 200;
	    } else if (this.calories >= 500) {
	        document.getElementById("message-here").innerHTML = "I'm not hungry";
	        setTimeout(() => {document.getElementById("message-here").innerHTML = "...";}, 4000);
	        person.calories = 600;
	    }
	}

	sleepFor() {
		this.sleep = person.sleep;
	    if (this.sleep) {
	        setTimeout(() => {document.getElementById("message-here").innerHTML = "I'm sleeping now";}, 100);
	        setTimeout(() => {document.getElementById("message-here").innerHTML = "I'm awake up";}, 4000);
	        setTimeout(() => {document.getElementById("message-here").innerHTML = "...";}, 5000);
	    } else {
	        setTimeout(() => {document.getElementById("message-here").innerHTML = "I don`t want sleep";}, 1000);
	        setTimeout(() => {document.getElementById("message-here").innerHTML = "...";}, 4000);
	    }
	    return person.sleep = false;
	}
}

const person = new Human(
    "Sung",
    "Jin-Woo",
    "male",
    18,
    0,
	true,
	"E"
);

document.getElementById("firstname").innerHTML = "First name: " + person.firstName;
document.getElementById("lastname").innerHTML = "Last name: " + person.lastName;
document.getElementById("age").innerHTML = "Age: " + person.age;
document.getElementById("gender").innerHTML = "Gender: " + person.gender;
document.getElementById("calories").innerHTML = "Calories: " + person.calories;
document.getElementById("rank").innerHTML = "Rank: " + person.rank;

class Superhero extends Human {
    constructor(alias, mana, age, gender, rang) {
        super(age, calories, gender);
        this.alias = alias;
		this.mana = mana;
		this.rang = rang;
    }

	shadowTrade() {
	    alert("I changed places with my shadow!");
	    setTimeout(() => {document.getElementById('image').src = 'assets/images/trade.jpg';}, 100);
	    setTimeout(() => {document.getElementById('image').src = 'assets/images/awakened.png';}, 5000);
	}

	summon() {
	    document.getElementById("mana").innerHTML = "Mana: " + hero.mana;
    	this.mana = hero.mana;
	    if (this.mana == 0) {
	    	hero.mana = 0;
	    	document.getElementById("mana").innerHTML = "Mana: " + hero.mana;
	        alert("No mana!");
	    } else if (this.mana <= 100) {
	        alert("Army summmoned!");
	        setTimeout(() => {document.getElementById('image').src = 'assets/images/summon.jpg';}, 100);
	        setTimeout(() => {document.getElementById('image').src = 'assets/images/awakened.png';}, 10000);
	        return hero.mana -= 1;
	    }
	}

	fightWithOverlord() {
	    let x = alert("Fight with Boss!");
	    x *= 1000;
	    alert("Khhhh-chh... Bang-g-g-g... Boss was defeated!");
	    setTimeout(() => {document.getElementById('image').src = 'assets/images/fighting.jpg';}, 100);
	    setTimeout(() => {document.getElementById('image').src = 'assets/images/awakened.png';}, x);
	}
}

const hero = new Superhero(
    "Awakened Sung Jin-Woo",
    100,
    person.age,
	person.gender,
	"S"
);

document.getElementById("alias").innerHTML = "Name: " + hero.alias;
document.getElementById("ages").innerHTML = "Age: " + person.age;
document.getElementById("genders").innerHTML = "Gender: " + person.gender;
document.getElementById("mana").innerHTML = "Mana: " + hero.mana;
document.getElementById("rang").innerHTML = "Rank: " + hero.rang;

function TurnIntoSuperhero() {
    if (person.calories < 500 && person.sleep != false)
        document.getElementById("message-here").innerHTML = "I'm hungry and I want sleep";
    else if (person.calories >= 500 && person.sleep != false)
        document.getElementById("message-here").innerHTML = "I want sleep";
    else if (person.calories < 500 && person.sleep == false)
        document.getElementById("message-here").innerHTML = "I'm hungry";
    else {
        alert("I'm Awakened!");
        setTimeout(() => {document.getElementById('stylesheet').href = 'css/superhero.css';}, 1000);
    }
}
