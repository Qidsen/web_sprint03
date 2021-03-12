let validator = {
    set: (obj, prop, value) => {
        if (prop === "age") {
            if (!Number.isInteger(value))
                throw new TypeError("The age is not an integer")
            else if (Number(value) > 200)
                throw new TypeError("The age is invalid")
            else {
                console.log(`Setting value '${value}' to '${prop}'`)
                obj[prop] = value
                return obj[prop]
            }
        }
        console.log(`Setting value '${value}' to '${prop}}'`)
        obj[prop] = value
        return obj[prop]
    },
    get: (obj, prop) => {
        console.log(`Trying to access the property '${prop}'`)
        if (prop in obj)
            return obj[prop]
        else
            return false
    }
}
