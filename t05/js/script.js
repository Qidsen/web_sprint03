let guest1 = { name : "Yaroslav" }
let guest2 = { name : "Andrey" }
let guest3 = { name : "Sergey" }
let guest4 = { name : "Vladislav" }
let guest5 = { name : "Ivan" }

let guestList = new Map()

guestList
    .set(guest1, "invited")
    .set(guest2, "invited")
    .set(guest3, "invited")
    .set(guest4, "intited")
    .set(guest5, "intited")

console.log("Map:") 
console.log(guestList.has(guest1))
console.log(guestList.size)
console.log(guestList.delete(guest3));



let dish1 = { name: "Salad", price: 23}
let dish2 = { name: "Ramen", price: 35}
let dish3 = { name: "Bufroll", price: 40}
let dish4 = { name: "Pad-Tai", price: 45}
let dish5 = { name: "Pizza", price: 60}

let menu = new Set()

menu
	.add(dish1)
	.add(dish2)
	.add(dish3)
	.add(dish2)
	.add(dish1)
	.add(dish4)
	.add(dish5)

console.log("\nSet:")
console.log(menu.size)
menu.forEach((dish) => {console.log(dish.name + " - " + dish.price + " UAH")})



let credentials1 = { pass: "qwerty" }
let credentials2 = { pass: "zxc123" }
let credentials3 = { pass: "qwerty" }
let credentials4 = { pass: "depressed_did" }
let credentials5 = { pass: "tgbrfvedc090" }

let bankVault = new WeakMap([
    [credentials1, { login: "sasageo" }],
    [credentials2, { login: "parasyte" }],
    [credentials3, { login: "demonslayer" }],
    [credentials4, { login: "noragamiaragoto" }],
    [credentials5, { login: "drstone"}]
])

console.log("\nWeakMap:")
console.log(bankVault.get(credentials1))
console.log(bankVault.get(credentials2))
console.log(bankVault.get(credentials3))
console.log(bankVault.get(credentials4))
console.log(bankVault.get(credentials5))



let ethereum = { value: "ethereum" }
let penny = { bankVaultlue: 1 }
let dash = { value: "dash" }
let cent = { value: 19 }

let coinCollection = new WeakSet()

coinCollection
    .add(ethereum)
    .add(penny)
    .add(dash)
    .add(cent);

console.log("\nWeakSet:")
console.log(coinCollection);
