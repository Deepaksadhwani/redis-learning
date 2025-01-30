const {client} = require("./client");

async function addToEqueue(key, value) {
    const data = await client.lpush(key, value)
    console.log(data)
}

async function removeFromEqueue(key) {
    const data = await client.rpop(key) // brpop(key, blocking time) ("fruits", 10) is also an option blocking time is in seconds
    console.log(data)
}

async function getEqueue(key) {
    const data = await client.lrange(key, 0, -1)
    console.log(data)
}

addToEqueue("fruits", "banana")
addToEqueue("fruits", "apple")
addToEqueue("fruits", "orange")
getEqueue("fruits")
removeFromEqueue("fruits")
getEqueue("fruits")
