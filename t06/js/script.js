let y = 1;

function* generator(x = 5) {
    let alert;
    for (let i = 0; i < x; i++) {
        alert = prompt("Previous result: " + y + ". Enter a new number:");
        if (Number(alert) > 10000) {
            y = 1;
        } else if (Number.isNaN(Number(alert))) {
            console.error("Invalid number!");
        } else {
            y += Number(alert);
        }
    }
    alert("Result is: " + y);
}

for (let generator1 of generator()) {}
