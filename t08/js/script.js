import Linkedlist from "./module.js"
window.Linkedlist = Linkedlist
window.createLinkedList = function createLinkedList(array) {
    return new Linkedlist(array)
}
