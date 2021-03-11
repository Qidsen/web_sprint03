let guest1 = { name : "Yaroslav" }
let guest2 = { name : "Andrey" }
let guest3 = { name : "Sergey" }
let guest4 = { name : "Vladislav" }

let guestList = new Set()

guestList
    .add(guest1)
    .add(guest2)
    .add(guest3)
    .add(guest4)
    
console.log(guestList.has(guest1))
console.log(guestList.size)
console.log(guestList.delete(guest3));
