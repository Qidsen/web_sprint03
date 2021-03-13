class Linkedlist {
    constructor(data) {
        this.data = {...data }
        this.next = 0
    }

    [Symbol.iterator] = function() {
        return {
            current: this.next,
            structure: this.data,
            next() {
                if (this.structure[this.current] == undefined)
                    return { done: true }
                else
                    return { done: false, value: this.structure[this.current++] }
            }
        }
    };

    add(value) {
        let x = 0
        let obj = {}
        for (const item of this) {
            obj[x] = item
            x++
        }
        obj[x] = value
        this.data = obj
    }

    remove(value) {
        let x = 0
        let obj = {}
        let find = false
        for (const item of this) {
            if (item == value && find == false) {
                find = true
                continue;
            }
            obj[x] = item
            x++
            find = false
        }
        this.data = obj
    }

    contains(value) {
        for (const item of this) {
            if (item == value)
                return true
        }
        return false
    }

    clear() { this.data = {} }

    count() {
        let x = 0
        for (const item of this)
            x++
        return x
    }

    log() {
        let arr = Array.from(this)
        console.log(arr.join(", "))
    }
}

function createLinkedList(array) {
    return new Linkedlist(array)
}
